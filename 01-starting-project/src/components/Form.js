import { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };
  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": expectedInterest,
      duration: investmentDuration,
    };

    props.onCalculate(userInput);
  };

  const onResetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");

    props.onReset();
  };
  return (
    <form className={style.form}>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={currentSavingsHandler}
            value={currentSavings}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={yearlySavingsHandler}
            value={yearlySavings}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={expectedInterestHandler}
            value={expectedInterest}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={investmentDurationHandler}
            value={investmentDuration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={style.actions}>
        <button
          onClick={onResetHandler}
          type="reset"
          className={style.buttonAlt}
        >
          Reset
        </button>
        <button onClick={submitHandler} type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
