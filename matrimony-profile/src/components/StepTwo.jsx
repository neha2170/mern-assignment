import React from "react";

const StepTwo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        Family Details
      </h2>
      <form className="space-y-6">
        <input
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-300"
          type="text"
          placeholder="Father's Name"
        />
        <input
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-300"
          type="text"
          placeholder="Mother's Name"
        />
        <input
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-300"
          type="text"
          placeholder="Siblings (if any)"
        />
      </form>
    </div>
  );
};

export default StepTwo;
