import { describe, it, expect } from "vitest";
import axe from "axe-core";
import { render } from "@testing-library/vue";
import "html-validate/vitest";
import ProductItem, { type Props } from "./ProductItem.vue";
import userEvent from "@testing-library/user-event";

const props: Props = {
  id: "1234-5678-123",
  name: "test",
  description: "test desc",
  image: "test-image.png",
};

describe("ProductItem", () => {
  it("should be accessible", () => {
    // render the component and check against axe
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

    const { html } = render(ProductItem, { props });
    expect(html()).toHTMLValidate();
  });
  describe("Behaviour", () => {
    it("should emit an 'add' event when button is clicked", async () => {
      // next up: how will I build and test the store?
      const user = userEvent.setup();
      const { findByRole, emitted } = render(ProductItem, { props });
      const button = await findByRole("button", { name: /add to cart/ });
      expect(button).toBeDefined();
      expect(emitted("add")).toBeUndefined();
      await user.click(button);
      expect(emitted("add").length).toBe(1);
      console.log(emitted("add")[0]);
      expect(emitted("add")[0]).toEqual([{ id: "1234-5678-123" }]);
    });
  });
});
