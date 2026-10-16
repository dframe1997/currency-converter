import { useState } from "react";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";

export const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("GBP");
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
    </div>
  );
};
