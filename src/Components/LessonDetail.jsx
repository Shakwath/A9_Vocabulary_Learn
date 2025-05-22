import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../Firebase.init';
import Modal from './Modal';
import fakeData from '../data/vocabulary.json';

const difficultyColors = {
  easy: 'bg-green-200/70 border-l-4 border-green-500',
  medium: 'bg-yellow-200/70 border-l-4 border-yellow-500',
  hard: 'bg-rose-200/70 border-l-4 border-rose-500',
};

const LessonDetail = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();
  const [setUser] = useState(null);
  const [vocabularies, setVocabularies] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [selectedVocab, setSelectedVocab] = useState(null);

  // Function to speak the vocabulary word
  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'de-DE'; // German language
    speechSynthesis.speak(utterance);
  };

  // Check user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/login');
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Filter vocabulary data and set lesson title
  useEffect(() => {
    const filtered = fakeData.filter(
      (item) => item.lesson_no === parseInt(lesson_no)
    );
    setVocabularies(filtered);

    if (filtered.length > 0) {
      setLessonTitle(filtered[0].lesson_title);
    } else {
      setLessonTitle('');
    }
  }, [lesson_no]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        Lesson {lesson_no}: {lessonTitle}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-between">
        {vocabularies.map((vocab) => (
          <div
            key={vocab.word}
            className={`p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition ${difficultyColors[vocab.difficulty] || 'bg-gray-100'}`}
          >
            <h2 className="text-xl font-bold">{vocab.word}</h2>
            <p className="text-sm text-gray-700">Meaning: {vocab.meaning}</p>
            <p className="text-sm text-gray-600">Pronunciation: {vocab.pronunciation}</p>
            <p className="text-sm text-gray-600 italic">{vocab.part_of_speech}</p>

            <button
              onClick={() => setSelectedVocab(vocab)}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              When to Say
            </button>

            <button
              onClick={() => speakWord(vocab.word)}
              className="text-blue-500 hover:text-blue-700 mt-2 block"
            >
              Speak 🔊
            </button>
          </div>
        ))}
      </div>

      {/* Back to Lessons */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/Startlearning')}
          className="px-8 py-3 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Back to Lesson
        </button>
      </div>

      {/* Modal Component */}
      {selectedVocab && (
        <Modal vocab={selectedVocab} onClose={() => setSelectedVocab(null)} />
      )}
    </div>
  );
};

export default LessonDetail;
