import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Blog } from "./Blog";
import { store } from "../store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

describe("Blog Component", () => {
  test("renders the title and author for the standard blog list card", () => {
    const blog = {
      title: "React patterns",
      author: "Michael Chan",
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Blog blog={blog} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText("React patterns")).toBeDefined();
    expect(screen.getByText("Michael Chan")).toBeDefined();
  });
});
