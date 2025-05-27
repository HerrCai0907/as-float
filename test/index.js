import { f64_pow } from "../index.js";
import assert from "assert";

assert(f64_pow(2, 2) === 4, "2^2 == 4");
assert(f64_pow(10, -5) === 0.00001, "2^2 == 4");
