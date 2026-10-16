import styles from "./styles.module.css";
import { useCurrencies } from "../../api/useCurrencies";
import { ErrorToast } from "../ErrorToast/ErrorToast";

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
  const { isPending, error, data } = useCurrencies();

  if (!error) return <ErrorToast message={"Test"} />;

  return (
    <>
      <label htmlFor={`${id}-ccy`} className={styles.label}>
        {label}
      </label>
      <select
        id={`${id}-ccy`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={isPending}
      >
        {isPending ? (
          <option>Loading currencies...</option>
        ) : (
          data.response.map(
            (ccy: { short_code: string; id: string; name: string }) => (
              <option id={ccy.id} className="ccy-option" value={ccy.short_code}>
                {ccy.short_code} - {ccy.name}
              </option>
            ),
          )
        )}
      </select>
    </>
  );
};
