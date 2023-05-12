import React, { useEffect, useRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Input from "./Input";

const TestRefInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Input id="name" ref={inputRef}>
      Name
    </Input>
  );
};

describe("<Input />", () => {
  it("renders correctly with a label", () => {
    render(<Input id="email">Email address</Input>);

    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
  });

  it("displays the correct error message when the input is required", () => {
    render(
      <Input id="name" required>
        Name
      </Input>
    );

    fireEvent.invalid(screen.getByRole("textbox"));

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("does not display the error message when you type again", () => {
    render(
      <Input id="name" required>
        Name
      </Input>
    );

    const input = screen.getByRole("textbox");

    fireEvent.invalid(input);

    expect(screen.getByText("This field is required")).toBeInTheDocument();

    fireEvent.input(input, { target: { value: "hello" } });

    expect(
      screen.queryByText("This field is required")
    ).not.toBeInTheDocument();
  });

  it("displays the correct error message when the email input is invalid", () => {
    render(
      <Input id="email" type="email">
        Email address
      </Input>
    );

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "johngmail.com" } });

    fireEvent.invalid(input);

    expect(
      screen.getByText("Please enter a valid email address")
    ).toBeInTheDocument();
  });

  it("accepts ref and could be focused programmatically", () => {
    const { container } = render(<TestRefInput />);

    const input = container.querySelector("input");

    expect(input).toHaveFocus();
  });
});
