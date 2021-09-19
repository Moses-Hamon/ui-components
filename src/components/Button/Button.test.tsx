import { render, screen, fireEvent } from "@testing-library/react";
import { Primary } from "./Button.stories";

test("should render", () => {
  render(<Primary {...Primary.args} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should render with correct text", () => {
  render(<Primary {...Primary.args} />);
  const button = screen.getByRole("button");

  expect(button).toHaveTextContent(/Button/i);
});

test("should call click event on click", () => {
  const handleClick = jest.fn();
  render(<Primary {...Primary.args} onClick={handleClick} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
