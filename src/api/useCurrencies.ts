import { useQuery } from "@tanstack/react-query";
import type { CurrenciesResponse } from "../types/CurrenciesResponse";

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchCurrencies = (): Promise<CurrenciesResponse> =>
  fetch("api/currencies", {
    headers: { Authorization: `Bearer ${API_KEY}` },
  }).then((res) => res.json());

export const useCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
    staleTime: 1000 * 60 * 60,
  });
};
