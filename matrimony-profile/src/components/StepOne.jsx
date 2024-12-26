import React from "react";

const StepOne = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Personal Details</h2>
      <form className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Date of Birth"
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Email Address"
        />
      </form>
    </div>
  );
};

export default StepOne;
