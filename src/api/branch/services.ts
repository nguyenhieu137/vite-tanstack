import axios from "../client";
import { Branch } from "./type";

export const fetchBranches = async (): Promise<Branch[]> => {
  const response = await axios.get("/branch");
  return response.data;
};
