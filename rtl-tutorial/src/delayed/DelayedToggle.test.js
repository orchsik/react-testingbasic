import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import DelayedToggle from "./DelayedToggle";

const setup = (props = {}) => {
  const utils = render(<DelayedToggle {...props} />);
  const { getByText } = utils;
  const toggleButton = getByText("토글");
  return { toggleButton, ...utils };
};

describe("<DelayedToggle />", () => {
  it("reveals text when toggle is ON", async () => {
    const { toggleButton, getByText } = setup();
    fireEvent.click(toggleButton);
    await waitFor(() => getByText(/야호/), { timeout: 3000 });
  });

  it("toggles text ON/OFF", async () => {
    const { toggleButton, findByText } = setup();
    fireEvent.click(toggleButton);
    const text = await findByText("ON");
    expect(text).toHaveTextContent("ON");
  });

  it("removes text when toggle is OFF", async () => {
    const { toggleButton, getByText, findByText } = setup();
    fireEvent.click(toggleButton);
    await findByText("ON");
    getByText("야호!!");
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => getByText("야호!!"));
  });
});

/**
 * waitFor 함수는 콜백 안의 함수가 에러가 발생시키지 않을 때 까지 기다리다가,
 * 대기시간이 timeout 을 초과하게 되면 테스트 케이스가 실패합니다.
 * timeout 은 기본값 4500ms이며, 커스터마이징을 할 수 있습니다.
 */

/**
 * findByText 함수는 특정 엘리먼트가, 나타났거나, 바뀌었거나, 사라질때까지 대기할 수 있다.
 * 그리고 프로미스가 끝날 때 우리가 선택한 엘리먼트를 resolve 합니다.
 */

/**
 * waitForElementToBeRemove는 특정 엘리먼트가 화면에서 사라질때까지 기다리는 함수입니다.
 */
