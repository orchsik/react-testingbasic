/**
 * REST API 를 호출해야 하는 컴포넌트의 경우, 테스트 코드에서도 똑같이 요청을 보낼 수는 있지만,
 * 일반적으로 서버에 API 를 직접 호출하지는 않고 이를 mocking 한다.
 * 왜냐하면 서버의 API 가 실제로 작동하고 안하고는 서버쪽의 일이기 때문이다.
 *
 * axios 를 사용했을 때 실제로 요청이 발생하지는 않지만 마치 발생한것처럼 작동하게 하는 방법이 있다.
 * 대표적으로 두가지가 있는데 node_modules 를 mocking 하는 방법이 있고,
 * axios-mock-adapter 라는 라이브러리를 쓰는 방법이 있다.
 *
 * axios-mock-adapter 를 사용해보자.
 */

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("<UserProfile />", () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 });
  mock.onGet("https://jsonplaceholder.typicode.com/users/1").reply(200, {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  });

  it("calls getUser API loads userData properly", async () => {
    const { queryByText } = render(<UserProfile />);
    queryByText("로딩중...");
    queryByText("Bret");
  });
});
