import { extractNameAndUrl } from "../utils/extractPavInfo";
import { PavData } from "../type";

export const mold = (dataAry: PavData) => {
  const picked = extractNameAndUrl(dataAry);
  return `${picked.name}: ${picked.url}`;
};
