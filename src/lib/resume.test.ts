import { describe, expect, it } from "vitest";
import { resumeFileExists } from "./resume";

describe("resumeFileExists", () => {
  it("returns a boolean without throwing when the file is absent", () => {
    expect(typeof resumeFileExists()).toBe("boolean");
  });
});
