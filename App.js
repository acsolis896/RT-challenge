import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import BirthdaySelection from './BirthdaySelection';
import GenreSelection from './GenreSelection';
import Top5MovieSelection from './MovieSelection';

function App() {
  const [step, setStep] = useState(1); // Use a state variable to track the current onboarding step

  const nextStep = () => {
    setStep(step + 1); // Move to the next step
  };

  const prevStep = () => {
    setStep(step - 1); // Move to the previous step
  };

  return (
    <div className="App">
      {step === 1 && <DisplayNameLocationPhoto />}
      {step === 2 && <BirthdaySelection />}
      {step === 3 && <GenreSelection />}
      {step === 4 && <Top5MovieSelection />}
      
      {/* Navigation buttons */}
      {step > 1 && (
        <button onClick={prevStep}>Previous</button>
      )}
      {step < 4 && (
        <button onClick={nextStep}>Next</button>
      )}
      {step === 4 && (
        <button>Finish</button>
      )}
    </div>
  );
}

export default App;

