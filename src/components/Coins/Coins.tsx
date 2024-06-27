const Coins = ({ handleCoinInsertion, currency }) => currency.denominations ? (
  <div className="coin-buttons">
    {currency.denominations.map((d) => {
      if (d % 1 === 0) {
        return (
          <button onClick={() => handleCoinInsertion(d)}>
            {d}
            {currency.sign}
          </button>
        );
      }
      return (
        <button onClick={() => handleCoinInsertion(d)}>
          {d * 100}
          {currency.cent}
        </button>
      );
    })}
  </div>
) : <div></div>

export default Coins;
