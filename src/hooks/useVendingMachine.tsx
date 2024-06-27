import { useEffect, useState } from "react";
import mockData from "../../mockApi/mockData.json";

const useVendingMachine = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState({ sign: "", cent: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const products = await fetchMockProducts();
      const currency = await fetchMockCurrency();
      setProducts(products);
      setCurrency(currency);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching mock posts:", error);
      setLoading(false);
    }
  };

  const fetchMockProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.products);
      }, 1000);
    });
  };

  const fetchMockCurrency = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.EU);
      }, 1000);
    });
  };

  const handleCoinInsertion = (amount: number): void => {
    setTotalAmount((prevAmount) =>
      parseFloat((prevAmount + amount).toFixed(2))
    );
  };

  const returnCash = () => {
    setTotalAmount(0);
  };

  return {
    totalAmount,
    products,
    currency,
    loading,
    handleCoinInsertion,
    returnCash,
  };
};

export default useVendingMachine;