import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-around w-3/4 mt-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`text-center ${
            currentStep >= index ? "text-blue-500" : "text-gray-400"
          }`}
        >
          <div className="font-bold">{step}</div>
          <div
            className={`h-2 w-2 rounded-full mt-1 ${
              currentStep >= index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
