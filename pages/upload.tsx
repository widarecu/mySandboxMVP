
import React from 'react';

export default function CSVUpload() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Upload Transactions</h1>
        <div className="border border-dashed border-gray-400 p-6 rounded text-center mb-4">
          <p>Choose a file or drag and drop it here</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Upload File
        </button>
        {/* Example classified transactions */}
        <table className="mt-6 w-full table-auto border-t">
          <thead>
            <tr className="text-left">
              <th className="pt-2">Date</th>
              <th className="pt-2">Description</th>
              <th className="pt-2">Category</th>
              <th className="pt-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apr 8</td>
              <td>Grocery Store</td>
              <td>Groceries</td>
              <td>$75.20</td>
            </tr>
            <tr>
              <td>Apr 8</td>
              <td>Utility Provider</td>
              <td>Utilities</td>
              <td>$120.00</td>
            </tr>
            <tr>
              <td>Apr 8</td>
              <td>Restaurant</td>
              <td>Dining</td>
              <td>$45.60</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
