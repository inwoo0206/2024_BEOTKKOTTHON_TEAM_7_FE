import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/customAxios";

const bestStudy = async () => {
  try {
    const data = await api.get("/study/heart3");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useHome = () => {
  const { data } = useQuery({
    queryKey: ["Beststudy"],
    queryFn: bestStudy,
  });
  return data;
};
