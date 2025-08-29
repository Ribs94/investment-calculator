import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [changeValue, setChangeValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const [results, setResults] = useState([]);

  const handleChange = (evt) => {
    const value = Number(evt.target.value);
    const newState = {
      ...changeValue,
      [evt.target.name]: value,
    };
    setChangeValue(newState);

    setResults(calculateInvestmentResults(newState));
  };

  return (
    <>
      <Header />
      <main>
        <UserInput changeValue={changeValue} handleChange={handleChange} />
        <Results
          data={results}
          initialInvestment={changeValue.initialInvestment}
          annualInvestment={changeValue.annualInvestment}
        />
      </main>
    </>
  );
}

export default App;
