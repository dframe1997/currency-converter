import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;

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
  const { isPending, error, data } = useQuery({
    queryKey: ["currencies"],
    queryFn: () =>
      fetch("api/currencies", {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const currencies = data.response;

  return (
    <>
      <label htmlFor={`${id}-ccy`} className={styles.label}>
        {label}
      </label>
      <select
        id={`${id}-ccy`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {currencies.map((ccy: { currency: string; id: string }) => (
          <option id={ccy.id} className="ccy-option">
            {ccy.short_code} - {ccy.name}
          </option>
        ))}
      </select>
    </>
  );
};
