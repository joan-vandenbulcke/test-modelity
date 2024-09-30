import { expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import Header from "./Header.vue";

test("render elements on page", async () => {
  render(Header);
});
