import { useQuery } from "@tanstack/react-query";
import type { ConversionResponse } from "../types/ConversionResponse";

const API_KEY = import.meta.env.VITE_API_KEY;

interface ConversionRequest {
  from: string;
  to: string;
  amount: number;
}

const fetchConversion = (
  params: URLSearchParams,
): Promise<ConversionResponse> =>
  fetch(`api/convert?${params.toString()}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  }).then((res) => res.json());

export const useConvert = ({ from, to, amount }: ConversionRequest) => {
  const params = new URLSearchParams({
    from,
    to,
    amount: amount.toString(),
  });
  return useQuery({
    queryKey: ["convert", from, to, amount],
    queryFn: () => fetchConversion(params),
    enabled: Boolean(from && to && amount > 0),
  });
};
