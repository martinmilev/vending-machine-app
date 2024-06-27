import { useState } from "react";
import "./App.css";

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [messageCashback, setMessageCashback] = useState("");
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [purchaseInProgress, setPurchaseInProgress] = useState(false);

  const coffees = [
    { id: 1, name: "Espresso", price: 1.5 },
    { id: 2, name: "Latte", price: 2.0 },
    { id: 3, name: "Cappuccino", price: 2.0 },
    { id: 4, name: "Mocha", price: 2.5 },
    { id: 5, name: "Americano", price: 1.8 },
    { id: 6, name: "Macchiato", price: 2.0 },
    { id: 7, name: "Flat White", price: 2.2 },
    { id: 8, name: "Affogato", price: 3.0 },
    { id: 9, name: "Irish Coffee", price: 2.5 },
    { id: 10, name: "Vienna Coffee", price: 2.3 },
  ];

  const handleCoinInsertion = (amount: number): void => {
    setTotalAmount((prevAmount) => prevAmount + amount);
    setMessage("");
    setMessageCashback("");
  };

  const handlePurchase = (coffee: {
    id?: number;
    name: string;
    price: number;
  }): void => {
    if (totalAmount >= coffee.price && !purchaseInProgress) {
      setPurchaseInProgress(true);
      setShowProgressBar(true);
      setMessage(`Preparing your ${coffee.name}...`);
      const cashBack = (totalAmount - coffee.price).toFixed(1);
      setTimeout(() => {
        setShowProgressBar(false);
        setTotalAmount(0);
        setPurchaseInProgress(false);
        setMessage(`Enjoy your ${coffee.name}!`);
        if (cashBack) {
          setMessageCashback(`You have ${cashBack}€ cashback.`);
        }
      }, 5000);
    } else {
      setMessage(`Insert more coins to purchase ${coffee.name}.`);
    }
  };

  return (
    <div>
      <div className="coin-buttons">
        <button onClick={() => handleCoinInsertion(0.05)}>5¢</button>
        <button onClick={() => handleCoinInsertion(0.1)}>10¢</button>
        <button onClick={() => handleCoinInsertion(0.2)}>20¢</button>
        <button onClick={() => handleCoinInsertion(0.5)}>50¢</button>
        <button onClick={() => handleCoinInsertion(1.0)}>1€</button>
        <button onClick={() => handleCoinInsertion(2.0)}>2€</button>
      </div>
      <div className="vending-machine">
        <div className="vending-machine-screen">
          <h2>Credit: {totalAmount.toFixed(2)}€</h2>
          <h3>
            {message} <br /> {messageCashback}
          </h3>
          {showProgressBar && (
            <div className="progress-bar-container">
              <div
                className={`progress-bar ${purchaseInProgress ? "fill" : ""}`}
              ></div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="grid">
            {coffees.map((coffee) => (
              <button
                key={coffee.id}
                onClick={() => handlePurchase(coffee)}
                className={`grid-button`}
                disabled={purchaseInProgress}
              >
                <p>
                  {coffee.name} <br />
                  {coffee.price}€
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
