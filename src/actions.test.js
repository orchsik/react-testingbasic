import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import tasks from "../fixtures/tasks";

import { loadTasks } from "./actions";
import { fetchTasks } from "./services/api";

jest.mock("./services/api");

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("loadTasks", () => {
  beforeEach(() => {
    fetchTasks.mockResolvedValue(tasks);
  });

  it("set Tasks", async () => {
    const store = mockStore({
      tasks: [],
    });
    await store.dispatch(loadTasks());

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "setTasks", payload: { tasks: [] } },
      { type: "setTasks", payload: { tasks } },
    ]);
  });
});
