import PropTypes from "prop-types";
import { useState } from "react";
import "./main.sass";
import getDates from "./date.mjs";

export default function App() {
    const [step, setStep] = useState(0);
    const [dayStep, setDayStep] = useState(1);
    const obj = {
        step,
        setStep,
        dayStep,
        setDayStep,
    };

    const dates = getDates(step);

    return (
        <div className="app">
            <h1>Playing with Dates!</h1>
            <div className="app__ctn">
                <Step obj={obj} day={true} text={"Step days"} />
                <p className="app__ctn__text">{dayStep}</p>
            </div>
            <div className="app__ctn">
                <Step obj={obj} />
                <p className="app__ctn__text">{step}</p>
            </div>

            <h2 className="app__msg">
                Today is a {dates[0].dayOfTheWeek}, {dates[0].monthOfTheYear} {dates[0].dayNumber} of{" "}
                {dates[0].year}
            </h2>

            {step > 0 && (
                <h2 className="app__msg">
                    The date ahead will be a {dates[1].dayOfTheWeek}, {dates[1].monthOfTheYear}{" "}
                    {dates[1].dayNumber} of {dates[1].year}
                </h2>
            )}
        </div>
    );
}

Step.propTypes = {
    obj: PropTypes.object.isRequired,
    day: PropTypes.bool,
    text: PropTypes.string,
};

function Step({ obj, day = false, text = "Add days" }) {
    function handleMinus() {
        if (obj.dayStep === 1) return;

        if (day && obj.dayStep > 1) {
            obj.setDayStep((s) => s - 1);
            return;
        }

        if (obj.step >= obj.dayStep) {
            obj.setStep((s) => s - obj.dayStep);
        } else {
            obj.setStep(0);
        }
    }

    function handleAdd() {
        if (day) {
            obj.setDayStep((s) => s + 1);
            return;
        }

        obj.setStep((s) => s + obj.dayStep);
    }

    return (
        <div className="step">
            <button className="step__subtract" onClick={handleMinus}>
                -
            </button>
            <p className="step__text">{text}</p>
            <button className="step__add" onClick={handleAdd}>
                +
            </button>
        </div>
    );
}
