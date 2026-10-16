import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_API_KEY;

export const useConvert = (from: string, to: string, amount: number) => {
  const params = new URLSearchParams({
    from,
    to,
    amount: amount.toString(),
  });
  return useQuery({
    queryKey: ["convert", from, to, amount],
    queryFn: () =>
      fetch(`api/convert?${params.toString()}`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }).then((res) => res.json()),
    enabled: Boolean(from && to && amount > 0),
  });
};
