import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Currency } from "../../ts/types/currency";
import { selectFirstRow, selectSecondRow, selectShowProgressBar } from "../../store/screenSlice";
import { selectCurrency } from "../../store/currencySlice";
import { selectCredit } from "../../store/creditSlice";

const Screen = () => {
  const currency: Currency = useSelector(selectCurrency);
  const showProgress: boolean = useSelector(selectShowProgressBar);
  const firstRow: string = useSelector(selectFirstRow);
  const secondRow: string = useSelector(selectSecondRow);
  const credit: number = useSelector(selectCredit);
  const { t } = useTranslation();

  return (
    <div className="screen">
      <p>{t("screen.credit", { amount: credit, sign: currency.sign })}</p>
      <p>{firstRow}</p>
      {showProgress ? (
        <div className="progress-bar-container">
          <div className={`progress-bar ${showProgress ? "fill" : ""}`}></div>
        </div>
      ) : (
        <p>{secondRow}</p>
      )}
    </div>
  );
};

export default Screen;
