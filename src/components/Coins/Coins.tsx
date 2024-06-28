import { Currency } from "../../ts/types/currency";

interface CoinsProps {
  currency: Currency;
  handleCoinInsertion: (denomination: number) => void;
  returnCash: () => void;
}

const Coins: React.FC<CoinsProps> = ({
  currency,
  handleCoinInsertion,
  returnCash,
}) => (
  <div className="coins">
    <div className="coin-buttons">
      {currency.denominations &&
        currency.denominations.map((d) => {
          if (d % 1 === 0) {
            return (
              <button onClick={() => handleCoinInsertion(d)} key={d}>
                {d}
                {currency.sign}
              </button>
            );
          }
          return (
            <button onClick={() => handleCoinInsertion(d)} key={d}>
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
);

export default Coins;
