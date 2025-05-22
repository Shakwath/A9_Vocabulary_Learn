import React from 'react';

const lessons = [
  { no: 1, title: "Basics of German Greetings" },
  { no: 2, title: "Expressions of Gratitude" },
  { no: 3, title: "Common Polite Phrases" },
  { no: 4, title: "Daily Conversations" },
  { no: 5, title: "Morning & Evening Greetings" },
  { no: 6, title: "Agreeing and Disagreeing" },
  { no: 7, title: "Apologies and Excuses" },
  { no: 8, title: "Asking and Answering" },
  { no: 9, title: "Polite Requests" },
  { no: 10, title: "Conversational Starters" },
  { no: 11, title: "Time-related Phrases" },
  { no: 12, title: "Essential Travel Phrases" },
  { no: 13, title: "Meeting and Parting" },
  { no: 14, title: "Shopping Essentials" },
  { no: 15, title: "Food and Dining Out" },
];

const LetsLearnPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Let's Learn</h1>

      {/* Lesson Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
        {lessons.map((lesson) => (
          <div
            key={lesson.no}
            className="bg-blue-500 p-6 rounded-lg shadow-lg text-white text-center cursor-pointer hover:bg-blue-600"
            onClick={() => window.location.href = `/lesson/${lesson.no}`}
          >
            <h2 className="text-xl font-semibold">Lesson {lesson.no}</h2>
            <p className="text-sm mt-2">{lesson.title}</p>
          </div>
        ))}
      </div>

      {/* Tutorial Section */}
      <div className="tutorial-section bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Learn the Alphabet</h2>
        <div className="flex justify-center mb-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7T2kr_Vtgw8?si=AF-QNVihldmshGrT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center">
        <button
          onClick={() => window.location.href = "/tutorials"}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          View More Tutorials
        </button>
      </div>
    </div>
  );
};

export default LetsLearnPage;
