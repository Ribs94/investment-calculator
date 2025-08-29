import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { getFormatter, calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [changeValue, setChangeValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const [currency, setCurrency] = useState("EUR");

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === "EUR" ? "USD" : "EUR"));
  };

  const handleChange = (evt) => {
    const value = Number(evt.target.value);
    setChangeValue((prev) => ({
      ...prev,
      [evt.target.name]: value,
    }));
  };

  const results = calculateInvestmentResults(changeValue);
  const formatter = getFormatter(currency);

  return (
    <>
      <Header />
      <main>
        <UserInput changeValue={changeValue} handleChange={handleChange} />
        <Results
          data={results}
          formatter={formatter}
          currency={currency}
          onToggleCurrency={handleToggleCurrency}
        />
      </main>
    </>
  );
}

export default App;
