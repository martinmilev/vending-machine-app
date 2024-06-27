import "./App.css";
import { Coins } from "./components/Coins";
import VendingMachine from "./components/VendingMachine";
import useVendingMachine from "./hooks/useVendingMachine";

function App() {
  const {
    totalAmount,
    products,
    currency,
    loading,
    handleCoinInsertion,
    returnCash,
  } = useVendingMachine();

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
          setTotalAmount={handleCoinInsertion}
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
