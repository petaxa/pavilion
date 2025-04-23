import fs from "fs";

export const writeTxt = (output: string[]) => {
  const outputPath = "./pavilions/summary.txt";
  fs.writeFileSync(outputPath, output.join("\n"), "utf8");
  console.log(`✅ Pavilion summary saved to ${outputPath}`);
};
