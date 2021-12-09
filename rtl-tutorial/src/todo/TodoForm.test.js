import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

const INPUT_PLACE_HOLDER = "할 일을 입력하세요";
const BUTTON_TEXT = "등록";

const setup = (props = {}) => {
  const utils = render(<TodoForm {...props} />);
  const { getByText, getByPlaceholderText } = utils;
  const input = getByPlaceholderText("할 일을 입력하세요");
  const button = getByText("등록");
  return { ...utils, input, button };
};

describe("<TodoForm />", () => {
  it("matches sanpshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("has input and a button", () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText(INPUT_PLACE_HOLDER);
    getByText(BUTTON_TEXT);
  });

  it("changes input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "TDD 배우기" } });
    expect(input).toHaveAttribute("value", "TDD 배우기");
    expect(input.value).toBe("TDD 배우기");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

    fireEvent.change(input, { target: { value: "TDD 배우기" } });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
