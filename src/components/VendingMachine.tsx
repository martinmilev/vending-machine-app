import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Screen } from "./Screen";
import { Products } from "./Products";
import { Product } from "../ts/types/product";
import { Currency } from "../ts/types/currency";
import { calculateCashback } from "../utils/calculateCashback";

interface VendingMachineProps {
  credit: number;
  products: Product[];
  currency: Currency;
  resetTotalAmount: () => void;
}

const VendingMachine: React.FC<VendingMachineProps> = ({
  products,
  credit,
  currency,
  resetTotalAmount,
}) => {
  const [message, setMessage] = useState<string>("");
  const [messageCashback, setMessageCashback] = useState<string>("");
  const [purchaseInProgress, setPurchaseInProgress] = useState<boolean>(false);
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (credit != 0) {
      setMessage("");
      setMessageCashback("");
    }
  }, [credit]);

  const handleClick = (product: Product): void => {
    if (credit < product.price && !purchaseInProgress) {
      setMessage(t("screen.error") + " " + t(`products.${product.name}`));
      setMessageCashback("");
      return;
    }

    handlePurchase(product);
  };

  const handlePurchase = (product: Product): void => {
    startPurchaseProcess(product.name);
    setTimeout(
      () =>
        completePurchaseProcess(
          product.name,
          calculateCashback(credit, product.price)
        ),
      5000
    );
  };

  const startPurchaseProcess = (name: string): void => {
    setPurchaseInProgress(true);
    setShowProgressBar(true);
    setMessage(t("screen.preparing") + " " + t(`products.${name}`));
  };

  const completePurchaseProcess = (name: string, cashBack: number): void => {
    setShowProgressBar(false);
    resetTotalAmount();
    setPurchaseInProgress(false);
    setMessage(t("screen.success") + " " + t(`products.${name}`));

    if (cashBack) {
      setMessageCashback(
        t("screen.cashback", { cashback: cashBack, sign: currency.sign })
      );
    }
  };

  return (
    <div className="vending-machine">
      <Screen
        rows={[
          t("screen.credit", { amount: credit, sign: currency.sign }),
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
