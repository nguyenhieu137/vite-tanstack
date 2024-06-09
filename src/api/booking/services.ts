import axios from "../client";
import { Booking } from "./type";

export const fetchBooking = async (): Promise<Booking[]> => {
  const response = await axios.get("/booking");
  return response.data;
};
