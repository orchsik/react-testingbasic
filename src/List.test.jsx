import React from "react";
import { render } from "@testing-library/react";

import List from "./List";
import tasks from "../fixtures/tasks";

describe("List", () => {
  context("with tasks", () => {
    it("renders tasks", () => {
      const { container } = render(<List tasks={tasks} />);

      expect(container).toHaveTextContent("아무 것도 하지 않기");
      expect(container).toHaveTextContent("건물 매입");
    });
  });

  context("without tasks", () => {
    it("renders no task message", () => {
      const tasks = [];
      const { container } = render(<List tasks={tasks} />);

      expect(container).toHaveTextContent("할 일이 없어요!");
    });
  });
});
