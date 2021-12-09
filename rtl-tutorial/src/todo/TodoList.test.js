import { fireEvent, render } from "@testing-library/react";
import { sampleTodos } from "../fixture/todo";
import TodoList from "./TodoList";

const setup = (props = {}) => {
  const initialProps = { todos: sampleTodos };
  const utils = render(<TodoList {...initialProps} {...props} />);
  return { ...utils };
};

describe("<TodoList />", () => {
  it("renders todos properly", () => {
    const { getByText } = setup();
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = setup({ onToggle, onRemove });

    const span_0 = getByText(sampleTodos[0].text);
    fireEvent.click(span_0);
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    const button_0 = getAllByText("삭제")[0];
    fireEvent.click(button_0);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
