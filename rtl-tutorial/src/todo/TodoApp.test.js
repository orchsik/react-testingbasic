import { fireEvent, render } from "@testing-library/react";
import { sampleTodos } from "../fixture/todo";
import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("등록");
    getByTestId("TodoList");
  });

  it("render three defaults todos", () => {
    const { getByText } = render(<TodoApp />);
    sampleTodos.forEach((todo) => {
      getByText(todo.text);
    });
  });

  it("creates new todo", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: { value: "Network 배우기" },
    });
    fireEvent.click(getByText("등록"));
    getByText("Network 배우기");
  });

  it("toggles todo", () => {
    const { getByText } = render(<TodoApp />);
    const span_0 = getByText(sampleTodos[0].text);
    expect(span_0).toHaveStyle("text-decoration: line-through");
    fireEvent.click(span_0);
    expect(span_0).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(span_0);
    expect(span_0).toHaveStyle("text-decoration: line-through");
  });

  it("remove todo", () => {
    const { getByText } = render(<TodoApp />);
    const span_1 = getByText(sampleTodos[1].text);
    const deleteBtn_1 = span_1.nextSibling;
    fireEvent.click(deleteBtn_1);
    expect(span_1).toBeInTheDocument();
  });
});
