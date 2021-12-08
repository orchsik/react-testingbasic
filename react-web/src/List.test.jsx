import React from "react";
import { render, fireEvent } from "@testing-library/react";

import List from "./List";
import tasks from "../fixtures/tasks";

describe("List", () => {
  const handleClick = jest.fn();

  function renderList(tasks) {
    return render(<List tasks={tasks} onClick={handleClick} />);
  }

  context("with tasks", () => {
    it("renders tasks", () => {
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("아무 것도 하지 않기");
      expect(container).toHaveTextContent("건물 매입");
    });

    it('renders "완료" buttons to delete to task', () => {
      const { getAllByText } = renderList(tasks);
      const buttons = getAllByText("완료");
      fireEvent.click(buttons[0]);
      expect(handleClick).toBeCalledWith(1);
    });
  });

  context("without tasks", () => {
    it("renders no task message", () => {
      const tasks = [];
      const { container } = renderList(tasks);
      expect(container).toHaveTextContent("할 일이 없어요!");
    });
  });
});
