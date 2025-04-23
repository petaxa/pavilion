import fs from "fs";
import path from "path";

export const pickAllData = () => {
  const rowDataDir = "./pavilions/raw";
  const fullDirPath = path.resolve(rowDataDir);

  const files = fs
    .readdirSync(fullDirPath)
    .filter((file) => file.endsWith(".json"));

  return files.map((file) => {
    const filePath = path.join(fullDirPath, file);
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content).data;
  }).flat();
};
