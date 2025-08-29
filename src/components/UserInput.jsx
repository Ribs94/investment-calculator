export default function UserInput({ changeValue, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="init-investment">Initial Investment</label>
          <input
            required
            type="number"
            id="init-investment"
            name="initialInvestment"
            value={changeValue.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            required
            type="number"
            id="annual-investment"
            name="annualInvestment"
            value={changeValue.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            required
            type="number"
            id="expected-return"
            name="expectedReturn"
            value={changeValue.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            required
            type="number"
            id="duration"
            name="duration"
            value={changeValue.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
}
