import { useState } from "react";
import "./App.css";
import { Coins } from "./components/Coins";
import VendingMachine from "./components/VendingMachine";

function App() {
  const [totalAmount, setTotalAmount] = useState(0);

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
  };

  return (
    <div>
      <Coins handleCoinInsertion={handleCoinInsertion} />
      <VendingMachine
        products={coffees}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
      />
    </div>
  );
}

export default App;
