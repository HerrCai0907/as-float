import { readFileSync, writeFileSync } from "fs";

const base64String = readFileSync("build/math.wasm", "base64");

writeFileSync("build/math.js", `export const MathWasmBase64 = "${base64String}";`);
