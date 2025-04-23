import { PavData } from "../type";

export const extractNameAndUrl = (
  data: PavData
): { name: string; url: string } => {
  const name = data.attributes.title ?? "!!!uncaught-title!!!";
  const url = data.id ? `https://www.expovisitors.expo2025.or.jp/pavilions/${data.id}` : "!!!uncaught-id!!!";

  return { name, url };
};
