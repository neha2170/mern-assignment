import React from "react";

const StepThree = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Preferences</h2>
      <form className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Preferred Location"
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Preferred Age Range"
        />
      </form>
    </div>
  );
};

export default StepThree;
