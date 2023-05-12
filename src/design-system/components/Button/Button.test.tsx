import React from "react";
import { MemoryRouter } from "react-router";
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("<Button />", () => {
  it("renders children prop", () => {
    render(<Button as="button">Splitify</Button>);

    expect(screen.getByText("Splitify")).toBeInTheDocument();
  });

  it("renders as a button when passed the as='button' prop", () => {
    render(<Button as="button">Splitify</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders as a link when passed the as='a' prop", () => {
    render(
      <MemoryRouter>
        <Button as="a" to="/success">
          Create account
        </Button>
      </MemoryRouter>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("renders the spinner when isLoading is true", () => {
    render(
      <Button as="button" isLoading>
        Splitify
      </Button>
    );

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders a disabled button when disabled is true", () => {
    render(
      <Button as="button" disabled>
        Splitify
      </Button>
    );

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("handles click event correctly", () => {
    const handleClick = jest.fn();

    render(
      <Button as="button" onClick={handleClick}>
        Create account
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("sets the type on the button", () => {
    render(
      <Button as="button" type="submit">
        Submit
      </Button>
    );

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
