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

const popularStudy = async () => {
  try {
    const data = await api.get("/study/comment3");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useHome = () => {
  const { data: best } = useQuery({
    queryKey: ["BestStudy"],
    queryFn: bestStudy,
  });
  const { data: popular } = useQuery({
    queryKey: ["PopularStudy"],
    queryFn: popularStudy,
  });
  return { best, popular };
};
