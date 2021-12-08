import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import ListContainer from "./ListContainer";

import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("ListContainer", () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ tasks }));

  it("renders tasks", () => {
    const { getByText, getAllByText } = render(<ListContainer />);
    expect(getByText(/아무 것도 하지 않기/));

    const buttons = getAllByText("완료");
    fireEvent.click(buttons[0]);
    expect(dispatch).toBeCalledWith({
      type: "deleteTask",
      payload: { id: 1 },
    });
  });
});
