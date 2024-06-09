import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchBooking } from "./services";
import { Booking } from "./type";

export const useBookings = (options?: UseQueryOptions<Booking[], Error>) => {
  return useQuery<Booking[], Error>({
    queryKey: ["bookings"],
    queryFn: fetchBooking,
    ...options,
  });
};
