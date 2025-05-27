import { MathWasmBase64 } from "./build/math.js";

const exports = (await WebAssembly.instantiate(Buffer.from(MathWasmBase64, "base64"))).instance.exports;

export function f64_pow(value, exponent) {
  return exports.f64_pow(value, exponent);
}
