import { render, screen } from "@testing-library/react";
import PostCard from "@/components/PostCard";
import "@testing-library/jest-dom";

describe("PostCard", () => {
  it("renders the post title and link", () => {
    render(<PostCard id={1} title="Retro Post" />);
    const link = screen.getByRole("link", { name: /post/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/posts/1");
  });
});
