import { useState } from "react";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import { useConvert } from "../../api/useConvert";

export const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);

  const { data, isFetching } = useConvert(fromCurrency, toCurrency, amount);

  const handleAmount = (amount: string) => {
    const numericAmount = Number(amount) || 0;
    setAmount(numericAmount);
  };

  console.log(data);

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencySelect
        id="from"
        value={fromCurrency}
        label="From"
        onChange={setFromCurrency}
      />
      <CurrencySelect
        id="to"
        value={toCurrency}
        label="To"
        onChange={setToCurrency}
      />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        value={amount}
        onChange={(e) => handleAmount(e.target.value)}
      />
      <p>{isFetching ? "Converting..." : data ? data.response.value : ""}</p>
    </div>
  );
};
