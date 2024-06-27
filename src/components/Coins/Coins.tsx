const Coins = ({ handleCoinInsertion }) => (
  <div className="coin-buttons">
    <button onClick={() => handleCoinInsertion(0.05)}>5¢</button>
    <button onClick={() => handleCoinInsertion(0.1)}>10¢</button>
    <button onClick={() => handleCoinInsertion(0.2)}>20¢</button>
    <button onClick={() => handleCoinInsertion(0.5)}>50¢</button>
    <button onClick={() => handleCoinInsertion(1.0)}>1€</button>
    <button onClick={() => handleCoinInsertion(2.0)}>2€</button>
  </div>
);

export default Coins;
