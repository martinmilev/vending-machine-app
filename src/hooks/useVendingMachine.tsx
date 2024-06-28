import { useState } from "react";
import mockData from "../../mockApi/mockData.json";
import { Product } from "../ts/types/product";
import { Currency } from "../ts/types/currency";

const useVendingMachine = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [currency, setCurrency] = useState<Currency>({
    sign: "",
    cent: "",
    denominations: [],
  });

  const fetchData = async (): Promise<void> => {
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

  const fetchMockProducts = (): Promise<Product[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.products);
      }, 1000);
    });

  const fetchMockCurrency = (): Promise<Currency> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.EU);
      }, 1000);
    });

  const handleCoinInsertion = (amount: number): void => {
    setTotalAmount((prevAmount) =>
      parseFloat((prevAmount + amount).toFixed(2))
    );
  };

  return {
    setTotalAmount,
    fetchData,
    loading,
    totalAmount,
    products,
    currency,
    handleCoinInsertion,
    resetTotalAmount: () => setTotalAmount(0),
  };
};

export default useVendingMachine;
