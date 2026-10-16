import styles from "./styles.module.css";
import { useCurrencies } from "../../api/useCurrencies";

export const CurrencySelect = ({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (newCurrency: string) => void;
}) => {
  const { isPending, isError, data } = useCurrencies();

  return (
    <>
      <label htmlFor={`${id}-ccy`} className={styles.label}>
        {label}
      </label>
      <select
        id={`${id}-ccy`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={isPending || isError}
      >
        {isPending ? (
          <option>Loading currencies...</option>
        ) : isError ? (
          <option>Error loading currencies</option>
        ) : (
          data &&
          data.response.map((ccy) => (
            <option id={ccy.id} className="ccy-option" value={ccy.short_code}>
              {ccy.short_code} - {ccy.name}
            </option>
          ))
        )}
      </select>
    </>
  );
};
