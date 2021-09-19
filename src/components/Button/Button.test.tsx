import { render, screen } from "@testing-library/react";
import { Primary } from "./Button.stories";

test("should render", () => {
  render(<Primary {...Primary.args} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should render with correct text", () => {
  render(<Primary {...Primary.args} />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(/Button/i);
});
