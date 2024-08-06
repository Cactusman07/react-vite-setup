import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { App, WrappedApp } from "./components/componentIndex";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("Renders hello world", () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole("heading", {
        level: 1
      })
    ).toHaveTextContent("Hello World");
  });

  it("Renders not found if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/does-not-exist"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1
      })
    ).toHaveTextContent("Not Found");
  });
});
