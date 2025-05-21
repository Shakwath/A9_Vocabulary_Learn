import React from 'react';

const Modal = ({ vocab, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{vocab.word}</h2>
        <p><strong>Meaning:</strong> {vocab.meaning}</p>
        <p><strong>When to Say:</strong> {vocab.when_to_say}</p>
        <p><strong>Example:</strong> {vocab.example}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
