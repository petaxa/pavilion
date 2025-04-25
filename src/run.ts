import { pickAllData } from "./module/pickData";
import { decodeUnicode } from "./utils/decode";
import { mold } from "./module/moldText";
import { PavData } from "./type";
import { writeTxt } from "./module/output";
import fs from "node:fs";

// raw から data だけを取り出す
const data: PavData[] = pickAllData();

fs.writeFileSync(
  "./logs/pickAllData.json",
  JSON.stringify(data, null, 2),
  "utf8"
);

// 配列の要素すべてに対して decode と 出力データ抽出(mold) を行う
const output: string[] = [
  "# パビリオン一覧",
  "",
  ...data.map((d) => {
    const decoded = decodeUnicode(d);
    fs.writeFileSync(
      "./logs/decodeUnicode.json",
      JSON.stringify(decoded, null, 2),
      "utf8"
    );
    return mold(decoded);
  }),
];

fs.writeFileSync("./logs/mold.json", JSON.stringify(output, null, 2), "utf8");

writeTxt(output);
