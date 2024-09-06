import { useQuery } from "@tanstack/react-query";

export const useReactQuery = (key: string, fetch: () => Promise<any>) => {
  return useQuery({
    queryKey: [key],
    queryFn: fetch,
  });
};
