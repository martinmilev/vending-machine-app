import { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { Products } from "./Products";

const VendingMachine = ({ products, totalAmount, setTotalAmount }) => {
  const [message, setMessage] = useState("");
  const [messageCashback, setMessageCashback] = useState("");
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [purchaseInProgress, setPurchaseInProgress] = useState(false);

  useEffect(() => {
    if (totalAmount != 0) {
      setMessage("");
      setMessageCashback("");
    }
  }, [totalAmount]);

  const handlePurchase = (product: {
    id?: number;
    name: string;
    price: number;
  }): void => {
    if (totalAmount >= product.price && !purchaseInProgress) {
      setPurchaseInProgress(true);
      setShowProgressBar(true);
      setMessage(`Preparing your ${product.name}...`);
      const cashBack = (totalAmount - product.price).toFixed(1);
      setTimeout(() => {
        setShowProgressBar(false);
        setTotalAmount(0);
        setPurchaseInProgress(false);
        setMessage(`Enjoy your ${product.name}!`);
        if (cashBack) {
          setMessageCashback(`You have ${cashBack}€ cashback.`);
        }
      }, 5000);
    } else {
      setMessage(`Insert more coins to purchase ${product.name}.`);
    }
  };
  return (
    <div className="vending-machine">
      <Screen
        rows={[`Credit: ${totalAmount}€`, message, messageCashback]}
        showProgress={showProgressBar}
      />
      <Products products={products} handleClick={handlePurchase} disabled={purchaseInProgress} />
    </div>
  );
};

export default VendingMachine;
