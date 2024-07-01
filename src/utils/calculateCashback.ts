export const calculateCashback = (
  credit: number,
  price: number
): number => {
  const cashback = credit - price;

  if (cashback === 0) {
    return 0;
  }

  const priceInCents = price * 100;

  if (priceInCents % 10 === 0) {
    return parseFloat(cashback.toFixed(2));
  }

  if (price % 10 === 0) {
    return cashback;
  }

  return parseFloat(cashback.toFixed(1));
};
