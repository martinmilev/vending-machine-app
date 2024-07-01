import { useState } from "react";
import { useTranslation } from "react-i18next";

const SugarScale = () => {
  const [level, setLevel] = useState(3);
  const levels = [...Array(6).keys()]
  const { t } = useTranslation();

  const decreaseLevel = () => {
    if (level > 0) {
      setLevel(level - 1);
    }
  };

  const increaseLevel = () => {
    if (level < 6) {
      setLevel(level + 1);
    }
  };

  return (
    <div className="sugar">
      {t("sugar")}
      <div className="container">
        <button onClick={decreaseLevel}>-</button>
        <div className="scale">
          <div className="triangle">
            {levels.map(index => (
              <div
                key={index}
                className={`block ${index < level ? "filled" : ""}`}
              ></div>
            ))}
          </div>
        </div>
        <button onClick={increaseLevel}>+</button>
      </div>
    </div>
  );
};

export default SugarScale;
