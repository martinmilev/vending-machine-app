import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Screen } from "./Screen";
import { Products } from "./Products";
import { Product } from "../ts/types/product";
import { calculateCashback } from "../utils/calculateCashback";
import { Currency } from "../ts/types/currency";
import { selectCredit, setCredit } from "../store/creditSlice";
import { selectProducts } from "../store/productsSlice";
import { selectCurrency } from "../store/currencySlice";
import {
  setFirstRow,
  setSecondRow,
  setShowProgressBar,
} from "../store/screenSlice";
import {
  selectPurchaseInProgress,
  setPurchaseInProgress,
} from "../store/vendingSlice";
import SugarScale from "./SugarScale/SugarScale";

const VendingMachine = () => {
  const dispatch = useDispatch();
  const credit: number = useSelector(selectCredit);
  const products: Product[] = useSelector(selectProducts);
  const currency: Currency = useSelector(selectCurrency);
  const purchaseInProgress: boolean = useSelector(selectPurchaseInProgress);

  const { t } = useTranslation();

  useEffect(() => {
    if (credit != 0) {
      dispatch(setFirstRow(""));
      dispatch(setSecondRow(""));
    }
  }, [credit, dispatch]);

  const handleClick = (product: Product): void => {
    if (credit < product.price && !purchaseInProgress) {
      dispatch(
        setFirstRow(t("screen.error") + " " + t(`products.${product.name}`))
      );
      dispatch(setSecondRow(""));
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
    dispatch(setPurchaseInProgress(true));
    dispatch(setShowProgressBar(true));
    dispatch(setFirstRow(t("screen.preparing") + " " + t(`products.${name}`)));
  };

  const completePurchaseProcess = (name: string, cashBack: number): void => {
    dispatch(setShowProgressBar(false));
    dispatch(setCredit(0));
    dispatch(setPurchaseInProgress(false));
    dispatch(setFirstRow(t("screen.success") + " " + t(`products.${name}`)));

    if (cashBack) {
      dispatch(
        setSecondRow(
          t("screen.cashback", { cashback: cashBack, sign: currency.sign })
        )
      );
    }
  };

  return (
    <div className="vending-machine">
      <Screen />
      <SugarScale />
      <Products
        products={products}
        handleClick={handleClick}
        disabled={purchaseInProgress}
      />
    </div>
  );
};

export default VendingMachine;
