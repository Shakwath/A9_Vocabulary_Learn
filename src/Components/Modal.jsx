import React from 'react';

const Modal = ({ vocab, onClose }) => {
  if (!vocab) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">{vocab.word}</h2>
        <p className="mb-2 text-sm sm:text-base"><strong>Meaning:</strong> {vocab.meaning}</p>
        <p className="mb-2 text-sm sm:text-base"><strong>When to Say:</strong> {vocab.when_to_say}</p>
        <p className="mb-4 text-sm sm:text-base"><strong>Example:</strong> {vocab.example}</p>
        <button
          className="w-full sm:w-auto mt-2 sm:mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600 transition"
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
