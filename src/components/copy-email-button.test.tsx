import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CopyEmailButton } from "./copy-email-button";

describe("CopyEmailButton", () => {
  it("copies the email to the clipboard and confirms it", async () => {
    // userEvent.setup() installs its own clipboard stub, so the spy has to
    // be attached to it afterward rather than pre-set on navigator.
    const user = userEvent.setup();
    const writeText = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue(undefined);

    render(<CopyEmailButton email="parvadushyantkumarbarot@gmail.com" />);

    await user.click(screen.getByRole("button", { name: "Copy Email" }));

    expect(writeText).toHaveBeenCalledWith(
      "parvadushyantkumarbarot@gmail.com"
    );
    expect(await screen.findByText("Copied")).toBeInTheDocument();
  });
});
