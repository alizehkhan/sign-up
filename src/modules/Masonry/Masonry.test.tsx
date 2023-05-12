import React from "react";
import { render, screen } from "@testing-library/react";

import Masonry from "./Masonry";

describe("Masonry", () => {
  render(<Masonry />);

  it("renders all items", () => {
    expect(screen.getAllByRole("img")).toHaveLength(3);
    expect(screen.getByLabelText("Split it!")).toHaveTextContent("sp/it it!");
  });
});
