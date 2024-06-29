import { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { Products } from "./Products";
import { Product } from "../ts/types/product";
import { Currency } from "../ts/types/currency";
import { calculateCashback } from "../utils/calculateCashback";

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

  const MESSAGES = {
    credit: `Credit: ${totalAmount}${currency.sign}`,
    preparing: (productName: string) => `Preparing your ${productName}...`,
    enjoy: (productName: string) => `Enjoy your ${productName}!`,
    cashback: (cashback: number) =>
      `You have ${cashback}${currency.sign} cashback.`,
  };

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
    startPurchaseProcess(product);
    setTimeout(
      () =>
        completePurchaseProcess(
          product,
          calculateCashback(totalAmount, product.price)
        ),
      5000
    );
  };

  const startPurchaseProcess = (product: Product): void => {
    setPurchaseInProgress(true);
    setShowProgressBar(true);
    setMessage(MESSAGES.preparing(product.name));
  };

  const completePurchaseProcess = (
    product: Product,
    cashBack: number
  ): void => {
    setShowProgressBar(false);
    resetTotalAmount();
    setPurchaseInProgress(false);
    setMessage(MESSAGES.enjoy(product.name));
    if (cashBack) {
      setMessageCashback(MESSAGES.cashback(cashBack));
    }
  };

  return (
    <div className="vending-machine">
      <Screen
        rows={[MESSAGES.credit, message, messageCashback]}
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
