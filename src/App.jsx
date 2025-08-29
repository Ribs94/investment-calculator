import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [changeValue, setChangeValue] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const [results, setResults] = useState([]);
  const handleChange = (evt) => {
    const newState = {
      ...changeValue,
      [evt.target.name]: evt.target.value,
    };
    setChangeValue(newState);

    const numericValues = {
      initialInvestment: Number(newState.initialInvestment),
      annualInvestment: Number(newState.annualInvestment),
      expectedReturn: Number(newState.expectedReturn),
      duration: Number(newState.duration),
    };

    setResults(calculateInvestmentResults(numericValues));
  };

  return (
    <>
      <Header />
      <main>
        <UserInput changeValue={changeValue} handleChange={handleChange} />
        <Results
          data={results}
          initialInvestment={Number(changeValue.initialInvestment)}
          annualInvestment={Number(changeValue.annualInvestment)}
        />
      </main>
    </>
  );
}

export default App;
