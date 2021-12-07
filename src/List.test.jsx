import { render } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("renders tasks", () => {
    const { container } = render(<List />);
    expect(container).toHaveTextContent("아무일도 하기 싫다.");
  });
});
