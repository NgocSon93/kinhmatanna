import { testTypeScript } from "./OrderChecking";
describe("testTypeScript()", () => {
  it("should return true when n > 0", () => {
    expect(testTypeScript(1)).toBe(true);
  });
  it("should return false when n = 0", () => {
    expect(testTypeScript(0)).toBe(false);
  });
  it("should return false when n < 0", () => {
    expect(testTypeScript(-1)).toBe(false);
  });
});
