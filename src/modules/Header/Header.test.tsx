import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders logo correctly", () => {
    render(<Header />);

    expect(screen.getByAltText("Splitify logo")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/logo.svg");
  });

  it("renders as header landmark", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
