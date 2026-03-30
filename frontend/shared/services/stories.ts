import { type IStory } from "../types";
import axiosInstance from "./instance";

export const getAll = async () => {
  const { data } = await axiosInstance.get<IStory[]>("/stories/all");

  return data;
};
