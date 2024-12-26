import React, { useState } from "react";
import Stepper from "./components/Stepper";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Personal Details",
    "Family Details",
    "Preferences",
    "Review & Submit",
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-8 mt-16">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create Your Matrimony Profile
        </h1>
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="mt-8">{renderStep()}</div>
        <div className="flex justify-between mt-10">
          <button
            className={`${
              currentStep === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-600 hover:bg-gray-800"
            } text-white py-2 px-6 rounded-full transition-all shadow-lg`}
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-all shadow-lg"
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
