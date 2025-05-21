import React from 'react';

const Modal = ({ vocab, onClose }) => {
  if (!vocab) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">{vocab.word}</h2>
        <p className="mb-1"><strong>Meaning:</strong> {vocab.meaning}</p>
        <p className="mb-1"><strong>When to Say:</strong> {vocab.when_to_say}</p>
        <p className="mb-1"><strong>Example:</strong> {vocab.example}</p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
