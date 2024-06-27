import { useEffect, useState } from "react";
import "./App.css";
import { Coins } from "./components/Coins";
import VendingMachine from "./components/VendingMachine";
import mockData from "../mockApi/mockData.json";

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState({ sign: "", cent: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const products = await fetchMockProducts();
      const currency = await fetchMockCurrency();
      setProducts(products);
      setCurrency(currency);
    } catch (error) {
      console.error("Error fetching mock posts:", error);
    }
  };

  const fetchMockProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.products);
      }, 1000);
    });
  };

  const fetchMockCurrency = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.EU);
      }, 1000);
    });
  };

  const handleCoinInsertion = (amount: number): void => {
    setTotalAmount((prevAmount) => prevAmount + amount);
  };

  const returnCash = () => {
    setTotalAmount(0)
  }

  return (
    <div className="container">
      <div className="inner-container">
          <VendingMachine
            products={products}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            currency={currency}
          />
          <Coins
            handleCoinInsertion={handleCoinInsertion}
            currency={currency}
            returnCash={returnCash}
          />
      </div>
    </div>
  );
}

export default App;
