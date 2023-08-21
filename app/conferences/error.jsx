"use client";

import { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div classNameName="container">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            404 Not Found
          </h1>
          <p className="text-gray-600">
            The page you're looking for does not exist.
          </p>
        </div>
        <div className="mt-4">
          <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Error;
