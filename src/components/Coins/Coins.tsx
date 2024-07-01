import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addCredit, setCredit } from "../../store/creditSlice";
import { selectPurchaseInProgress } from "../../store/vendingSlice";
import { selectCurrency } from "../../store/currencySlice";
import { Currency } from "../../ts/types/currency";

const Coins = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const returnCash = () => dispatch(setCredit(0));

  const currency: Currency = useSelector(selectCurrency);
  const purchaseInProgress: boolean = useSelector(selectPurchaseInProgress);

  console.log(purchaseInProgress);
  const handleCoinInsertion = (denomination: number) =>
    dispatch(addCredit(denomination));

  return (
    <div className="coins">
      <div className="coins-buttons">
        {currency.denominations &&
          currency.denominations.map((denomination) => {
            if (denomination % 1 === 0) {
              return (
                <button
                  onClick={() => handleCoinInsertion(denomination)}
                  key={denomination}
                  disabled={purchaseInProgress}
                >
                  {denomination}
                  {currency.sign}
                </button>
              );
            }
            return (
              <button
                onClick={() => handleCoinInsertion(denomination)}
                key={denomination}
                disabled={purchaseInProgress}
              >
                {denomination * 100}
                {currency.cent}
              </button>
            );
          })}
      </div>
      <div className="return-cash">
        <button onClick={returnCash} disabled={purchaseInProgress}>
          {t("return-cash")}
        </button>
      </div>
    </div>
  );
};

export default Coins;
