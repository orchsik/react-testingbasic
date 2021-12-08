import tasks from "../fixtures/tasks";
import { deleteTask, setTasks } from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  describe("setTasks", () => {
    it("changes tasks array", () => {
      const initialState = {
        tasks: [],
      };
      const state = reducer(initialState, setTasks(tasks));
      expect(state.tasks).not.toHaveLength(0);
    });
  });

  describe("deleteTask", () => {
    context("with existed task ID", () => {
      it("remove the task from tasks", () => {
        const state = reducer(
          {
            tasks,
          },
          deleteTask(1)
        );

        expect(state.tasks).toHaveLength(1);
      });
    });

    context("without existed task ID", () => {
      it("doesn't work", () => {
        const state = reducer(
          {
            tasks,
          },
          deleteTask(100)
        );

        expect(state.tasks).toHaveLength(tasks.length);
      });
    });
  });
});
