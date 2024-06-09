import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchBranches } from "./services";
import { Branch } from "./type";

export const useBranches = (options?: UseQueryOptions<Branch[], Error>) => {
  return useQuery<Branch[], Error>({
    queryKey: ["branches"],
    queryFn: fetchBranches,
    ...options,
  });
};
