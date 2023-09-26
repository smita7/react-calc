import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";

import Form from "./components/Form";
import Results from "./components/Results";
import Header from "./components/Header";
function App() {
  const [yearlyDataGlobal, setYearlyDataGloabl] = useState([]);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    console.log("wer reached here");
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyDataGloabl(yearlyData);
  };

  const onReset = () => {
    setYearlyDataGloabl([]);
  };

  return (
    <div>
      <Header logo={logo}></Header>
      <Form onCalculate={calculateHandler} onReset={onReset}>
        {" "}
      </Form>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {console.log(yearlyDataGlobal)}
      <Results resultArray={yearlyDataGlobal}> </Results>
    </div>
  );
}

export default App;
