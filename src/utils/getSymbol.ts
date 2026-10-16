import type { Currency } from "../types/Currency";

export const getSymbol = (currencies: Currency[], ccy_code: string) =>
  currencies?.find((c) => c.short_code === ccy_code)?.symbol;
