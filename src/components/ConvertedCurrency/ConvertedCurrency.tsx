import { useConvert } from "../../api/useConvert";
import { useCurrencies } from "../../api/useCurrencies";
import type { ConversionRequest } from "../../types/ConversionRequest";
import { getSymbol } from "../../utils/getSymbol";
import styles from "./styles.module.css";

export const ConvertedCurrency = ({ from, to, amount }: ConversionRequest) => {
  const { data, isFetching, isError } = useConvert({
    from,
    to,
    amount,
  });

  // Cross-reference the currencies list to get the symbol for the "to" currency
  const { data: currencies } = useCurrencies();

  let content = "Enter an amount";

  if (isFetching) content = "Converting...";
  if (isError) content = "Failed to fetch conversion rate";
  if (data)
    content =
      (currencies ? getSymbol(currencies.response, data.response.to) : "") +
      Number(data.response.value).toFixed(2);

  return <p className={styles.result}>{content}</p>;
};
