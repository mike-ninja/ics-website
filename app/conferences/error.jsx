"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-gray-800 mb-2">
            404 Not Found
          </h1>
          <p class="text-gray-600">
            The page you're looking for does not exist.
          </p>
        </div>
        <div class="mt-4">
          <a href="/" class="text-blue-500 hover:underline">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Error;
