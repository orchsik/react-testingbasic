import React, { useCallback, useState } from "react";

import Counter from "./counter/Counter";
import Profile from "./profile/Profile";
import TodoForm from "./todo/TodoForm";

import { sampleTodos } from "./fixture/todo";
import TodoList from "./todo/TodoList";

const App = () => {
  const [todos, setTodos] = useState(sampleTodos);

  const insert = useCallback(
    (text) => {
      const id = Math.max(...Object.values(todos).map((D) => D.id));
      const obj = { id, text, done: false };
      setTodos([...todos, obj]);
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done: false };
          }
          return todo;
        })
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done: true };
          }
          return todo;
        })
      );
    },
    [todos]
  );

  return (
    <>
      <Profile username="액션가면" name="신짱구" />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <TodoForm onInsert={insert} />
      <br />
      <br />
      <TodoList todos={todos} toggle={onToggle} remove={onRemove} />
    </>
  );
};

export default App;
