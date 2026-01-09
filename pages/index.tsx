
import React from 'react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-4">Take Control of Your Finances</h1>
      <p className="mb-6 text-lg text-center max-w-xl">
        Track your net worth and manage your assets and liabilities with ease.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}
