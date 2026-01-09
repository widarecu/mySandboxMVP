
import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Net Worth: $74,560</h1>
        <p className="text-green-600 mb-4">+ $4,120 from last month</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-lg">Assets</h2>
            <p>$90,000</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Liabilities</h2>
            <p>$15,440</p>
          </div>
        </div>
        {/* Placeholder for bar and pie charts */}
        <div className="mt-6 text-center text-gray-500">[Graphs Go Here]</div>
      </div>
    </div>
  );
}
