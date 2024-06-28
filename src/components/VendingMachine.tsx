import { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { Products } from "./Products";
import { Product } from "../ts/types/product";
import { Currency } from "../ts/types/currency";

interface VendingMachineProps {
  products: Product[];
  totalAmount: number;
  currency: Currency;
  resetTotalAmount: () => void;
}

const VendingMachine: React.FC<VendingMachineProps> = ({
  products,
  totalAmount,
  currency,
  resetTotalAmount,
}) => {
  const [message, setMessage] = useState<string>("");
  const [messageCashback, setMessageCashback] = useState<string>("");
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);
  const [purchaseInProgress, setPurchaseInProgress] = useState<boolean>(false);

  useEffect(() => {
    if (totalAmount != 0) {
      setMessage("");
      setMessageCashback("");
    }
  }, [totalAmount]);

  const handleClick = (product: Product): void => {
    if (totalAmount < product.price && !purchaseInProgress) {
      setMessage(`Insert more coins to purchase ${product.name}.`);
      setMessageCashback("");
      return;
    }

    handlePurchase(product);
  };

  const handlePurchase = (product: Product): void => {
    setPurchaseInProgress(true);
    setShowProgressBar(true);
    setMessage(`Preparing your ${product.name}...`);
    const cashBack = calculateCashback(totalAmount, product.price);
    setTimeout(() => {
      setShowProgressBar(false);
      resetTotalAmount();
      setPurchaseInProgress(false);
      setMessage(`Enjoy your ${product.name}!`);
      if (cashBack) {
        setMessageCashback(`You have ${cashBack}${currency.sign} cashback.`);
      }
    }, 5000);
  };

  const calculateCashback = (totalAmount: number, price: number): number | string => {
    const cashback = totalAmount - price;
    if (cashback === 0) {
      return 0;
    }
    if ((price * 100) % 10 === 0) {
      return cashback.toFixed(2);
    }
    if (price % 10 === 0) {
      return cashback;
    }
    return cashback.toFixed(1);
  };

  return (
    <div className="vending-machine">
      <Screen
        rows={[
          `Credit: ${totalAmount}${currency.sign}`,
          message,
          messageCashback,
        ]}
        showProgress={showProgressBar}
      />
      <Products
        products={products}
        handleClick={handleClick}
        disabled={purchaseInProgress}
      />
    </div>
  );
};

export default VendingMachine;
