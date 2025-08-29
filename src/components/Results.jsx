export default function Results({
  data,
  formatter,
  onToggleCurrency,
  currency,
}) {
  let totalInterest = 0;

  return (
    <>
      <div>
        <button id="button" onClick={onToggleCurrency}>
          Switch to {currency === "USD" ? "EUR" : "USD"}
        </button>
      </div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((yearData) => {
            totalInterest += yearData.interest;

            const investedCapital = data[0].valueEndOfYear - yearData.interest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
