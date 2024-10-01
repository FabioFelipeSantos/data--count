import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Fabio</h1>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(0);

  function handleMinus() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleAdd() {
    setStep((s) => s + 1);
  }

  return (
    <div className="step">
      <button className="step__subtract" onClick={handleMinus}>
        -
      </button>
      <p className="step__text">Step</p>
      <button className="step__add" onClick={handleAdd}>
        +
      </button>

      <p>{step}</p>
    </div>
  );
}
