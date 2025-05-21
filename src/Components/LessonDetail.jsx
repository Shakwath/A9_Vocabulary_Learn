import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../Firebase.init';
import Modal from './Modal';
import fakeData from '../data/vocabulary.json';

const difficultyColors = {
  easy: 'bg-green-100',
  medium: 'bg-yellow-100',
  hard: 'bg-red-100',
};

const LessonDetail = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [vocabularies, setVocabularies] = useState([]);
  const [selectedVocab, setSelectedVocab] = useState(null);

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

  // Filter vocabulary data
  useEffect(() => {
    const filtered = fakeData.filter(
      (item) => item.lesson_no === parseInt(lesson_no)
    );
    setVocabularies(filtered);
  }, [lesson_no]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Lesson {lesson_no} Vocabulary
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
          </div>
        ))}
      </div>

      {/* Back to Lessons */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/Startlearning')}
          className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
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
