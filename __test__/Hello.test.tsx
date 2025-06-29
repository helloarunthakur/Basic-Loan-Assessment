import { render, screen } from "@testing-library/react";
import Hello from "@/components/Hello";

describe("Hello Component", () => {
  it("renders hello message", () => {
    render(<Hello />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
