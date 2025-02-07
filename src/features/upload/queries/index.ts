import { useQuery, useMutation } from "@tanstack/react-query";

export const useExample = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventList"],
    queryFn: () => {},
  });

  return { data, isLoading, isError, error };
};
