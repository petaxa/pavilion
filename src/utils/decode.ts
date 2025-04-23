import { PavData } from "../type";

export const decodeUnicode = (input: PavData): PavData => {
  if (typeof input === "string") {
    return input.replace(/\\u[\dA-Fa-f]{4}/g, (match) =>
      String.fromCharCode(parseInt(match.slice(2), 16))
    );
  } else if (Array.isArray(input)) {
    return input.map(decodeUnicode);
  } else if (input !== null && typeof input === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(input)) {
      result[key] = decodeUnicode(value);
    }
    return result;
  }
  return input;
};
