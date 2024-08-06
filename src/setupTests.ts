import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

console.log("matchers", matchers);

// use jest-dom with Vitest.
expect.extend(matchers);
