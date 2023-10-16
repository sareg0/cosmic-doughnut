import { afterEach } from "vitest";
import { cleanup } from "@testing-library/vue";

// hooks are reset before each suite
// https://vitest.dev/api/#aftereach
afterEach(() => {
  cleanup();
});

Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  writable: true,
  value: () => {
    return {};
  },
});
