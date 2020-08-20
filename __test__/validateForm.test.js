import { validateForm } from "../src/client/js/formHandler";

describe("Testing the form validation functionality", () => {
  test("Testing the validateForm() function with a link, should return false", () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    expect(validateForm("https://udacity.com")).toBe(false);
  });
  test("Testing the validateForm() function with a link, should return false", () => {
    expect(validateForm("www.udacity.com")).toBe(false);
  });
  test("Testing the validateForm() with a valid text, should return true", () => {
    expect(validateForm("This is a valid text.")).toBe(true);
  });
});
