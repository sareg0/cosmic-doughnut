import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

// See here how to get started:
// https://playwright.dev/docs/intro
test.describe("dark-mode", () => {
  test.use({
    colorScheme: "dark",
  });

  test("cart count updates as user selects items", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 0"
    );
    await page.getByRole("button", { name: "add to cart" }).first().click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 1"
    );
    await page.getByRole("button", { name: "add to cart" }).nth(1).click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 2"
    );
    await page.getByRole("button", { name: "add to cart" }).first().click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 3"
    );
    await page.getByRole("button", { name: "add to cart" }).nth(1).click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 4"
    );
  });
});
test.describe("light-mode", () => {
  test.use({
    colorScheme: "light",
  });
  test("visits the app root url in", async ({ page }) => {
    await expect(page.locator("div.greetings > h1")).toHaveText("You did it!");
  });

  test("cart count updates as user selects items", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 0"
    );
    await page.getByRole("button", { name: "add to cart" }).first().click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 1"
    );
    await page.getByRole("button", { name: "add to cart" }).nth(1).click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 2"
    );
    await page.getByRole("button", { name: "add to cart" }).first().click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 3"
    );
    await page.getByRole("button", { name: "add to cart" }).nth(1).click();
    await expect(page.getByRole("heading", { name: /cart:/ })).toHaveText(
      "cart: 4"
    );
  });
});
