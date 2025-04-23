import fs from "fs";

export const writeTxt = (output: string[]) => {
  const outputPath = "./pavilions/summary.md";
  fs.writeFileSync(outputPath, output.join("\n"), "utf8");
  console.log(`✅ Pavilion summary saved to ${outputPath}`);
};
