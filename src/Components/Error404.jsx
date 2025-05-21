// src/pages/Error404.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Error404 = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-2">
        The page <code className="bg-gray-100 p-1 rounded">{location.pathname}</code> does not exist.
      </p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
