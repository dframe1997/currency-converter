import { useState } from "react";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import { ConvertedCurrency } from "../ConvertedCurrency/ConvertedCurrency";
import { SwapCurrencies } from "../SwapCurrencies/SwapCurrencies";
import styles from "./styles.module.css";

export const Form = () => {
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  const handleAmount = (amount: string) => {
    setAmount(amount);
  };

  const swapCurrencies = () => {
    const from = fromCurrency;
    const to = toCurrency;
    setFromCurrency(to);
    setToCurrency(from);
  };

  const parsedNumber = Number(amount);
  const isValidNumber = !Number.isNaN(parsedNumber);
  const numericAmount = isValidNumber ? parsedNumber : 0;

  return (
    <div className={styles.card}>
      <h1>Currency Converter</h1>
      <form className={styles.form}>
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
        <SwapCurrencies swapFn={swapCurrencies} />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="0"
          step="any"
          value={amount}
          onChange={(e) => handleAmount(e.target.value)}
        />
      </form>
      <ConvertedCurrency
        from={fromCurrency}
        to={toCurrency}
        amount={numericAmount}
      />
    </div>
  );
};
