const Coins = ({ handleCoinInsertion, currency, returnCash }) =>
  currency.denominations ? (
    <div className="coins">
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
      <div className="return-cash">
        <button onClick={() => returnCash()}>Return Cash</button>
      </div>
    </div>
  ) : (
    <div></div>
  );

export default Coins;
