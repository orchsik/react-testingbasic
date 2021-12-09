import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile>", () => {
  const props = {
    username: "액션가면",
    name: "신짱구",
  };
  const utils = render(<Profile {...props} />);

  it("matches sanpshot", () => {
    expect(utils.container).toMatchSnapshot();
  });
  it("shows teh props correctly", () => {
    utils.getByText("액션가면");
    utils.getByText("신짱구");
    utils.getByText(/신/);
  });
});
