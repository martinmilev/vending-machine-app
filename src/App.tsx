import { useEffect } from "react";
import "./App.scss";
import { Coins } from "./components/Coins";
import VendingMachine from "./components/VendingMachine";
import useVendingMachine from "./hooks/useVendingMachine";

const App = () => {
  const {
    fetchData,
    totalAmount,
    products,
    currency,
    loading,
    handleCoinInsertion,
    resetTotalAmount,
  } = useVendingMachine();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="inner-container">
        <VendingMachine
          products={products}
          totalAmount={totalAmount}
          currency={currency}
          resetTotalAmount={resetTotalAmount}
        />
        <Coins
          currency={currency}
          handleCoinInsertion={handleCoinInsertion}
          returnCash={resetTotalAmount}
        />
      </div>
    </div>
  );
}

export default App;
