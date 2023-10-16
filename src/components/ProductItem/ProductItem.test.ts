import { describe, it, expect } from "vitest";
import axe from "axe-core";
import { render } from "@testing-library/vue";
import "html-validate/vitest";
import ProductItem, { type Props } from "./ProductItem.vue";
import userEvent from "@testing-library/user-event";

describe("ProductItem", () => {
  it("should be accessible", () => {
    // render the component and check against axe
    const props: Props = {
      name: "test",
      description: "test desc",
      image: "test-image.png",
    };
    const { container, debug } = render(ProductItem, { props });
    axe
      .run(container)
      .then((results) => {
        if (results.violations.length) {
          throw new Error("Accessibility issues found");
        }
      })
      .catch((err) => {
        console.error("Something bad happened:", err.message);
      });
  });
  it("should have valid HTML", async () => {
    // install the html validity check
    // html-validate pckage is installed
    const props: Props = {
      name: "test",
      description: "test desc",
      image: "test-image.png",
    };
    const { html } = render(ProductItem, { props });
    expect(html()).toHTMLValidate();
  });
  describe("Behaviour", () => {
    it("should emit an event when adding to cart", async () => {
      // next up: how will I build and test the store?
      // Also... how might one do this without sotre?... but... I dunno.
      const props: Props = {
        name: "test",
        description: "test desc",
        image: "test-image.png",
      };
      const user = userEvent.setup();
      const { findByRole } = render(ProductItem, { props });
      const button = await findByRole("button", { name: /add to cart/ });
      expect(button).toBeDefined();
      //   await user.click
    });
  });
});
