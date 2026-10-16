import { useQuery } from "@tanstack/react-query";

const API_KEY = import.meta.env.VITE_API_KEY;

export const useCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: () =>
      fetch("api/currencies", {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }).then((res) => res.json()),
  });
};
