import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResumeModal } from "./resume-modal";

describe("ResumeModal", () => {
  it("renders nothing when closed", () => {
    render(
      <ResumeModal
        open={false}
        onClose={() => {}}
        resumePath="/resume/test.pdf"
        fileName="test.pdf"
      />
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders as an accessible dialog with the file name when open", () => {
    render(
      <ResumeModal
        open
        onClose={() => {}}
        resumePath="/resume/test.pdf"
        fileName="test.pdf"
      />
    );
    const dialog = screen.getByRole("dialog", { name: "Résumé preview" });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText("test.pdf")).toBeInTheDocument();
  });

  it("calls onClose when Escape is pressed", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <ResumeModal
        open
        onClose={onClose}
        resumePath="/resume/test.pdf"
        fileName="test.pdf"
      />
    );

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onClose when the backdrop is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <ResumeModal
        open
        onClose={onClose}
        resumePath="/resume/test.pdf"
        fileName="test.pdf"
      />
    );

    await user.click(screen.getByLabelText("Dismiss résumé preview"));
    expect(onClose).toHaveBeenCalled();
  });
});
