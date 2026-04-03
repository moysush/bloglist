import { render, screen } from "@testing-library/react";
import BlogForm from "./BlogForm";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("BlogForm tests", async () => {
  test("new blog is created with correct informations when called with form's event handler", async () => {
    const user = userEvent.setup();
    const mockHandler = vi.fn();

    render(<BlogForm newBlog={mockHandler} toggleVisibility={vi.fn()} />);

    // const screenByLabel = (label) => {
    //   return screen.getByLabelText(label);
    // };

    await user.type(screen.getByPlaceholderText("Blog title"), "Hello, Mars!");
    await user.type(screen.getByPlaceholderText("Author name"), "Sush");
    await user.type(
      screen.getByPlaceholderText("https://example.com/my-blog"),
      "sush.hellomars.com",
    );

    await user.click(screen.getByText("+ Publish Blog"));

    expect(mockHandler.mock.calls[0][0]).toStrictEqual({
      title: "Hello, Mars!",
      author: "Sush",
      url: "sush.hellomars.com",
    });
  });
});
