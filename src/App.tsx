import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "./store/loadingSlice";
import { fetchCurrency, fetchProducts } from "./api/mockedApi";
import VendingMachine from "./components/VendingMachine";
import { Coins } from "./components/Coins";
import { LanguageSwitch } from "./components/LanguageSwitch";

const App = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCurrency());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <LanguageSwitch />
      <div className="container">
        <VendingMachine />
        <Coins />
      </div>
    </div>
  );
};

export default App;
