import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile>", () => {
  const props = {
    username: "액션가면",
    name: "신짱구",
  };

  it("matches sanpshot", () => {
    const utils = render(<Profile {...props} />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows teh props correctly", () => {
    const utils = render(<Profile {...props} />);
    utils.getByText("액션가면");
    utils.getByText("신짱구");
    utils.getByText(/신/);
  });
});
