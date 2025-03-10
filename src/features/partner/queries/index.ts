import { useQuery, useMutation } from "@tanstack/react-query";
import { getPartners as getPlaces } from "@/features/place/api";

export const useGetPlaces = () => {
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["getPlaces"],
    queryFn: async () => {
      const places = await getPlaces();
      console.log(places);

      return places;
    },
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, isError, isSuccess, refetch };
};
