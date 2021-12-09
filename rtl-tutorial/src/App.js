import React, { useCallback, useState } from "react";

import Counter from "./counter/Counter";
import Profile from "./profile/Profile";
import TodoForm from "./todo/TodoForm";
import TodoItem from "./todo/TodoItem";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "TDD 배우기", done: false },
    { id: 3, text: "DDD 배우기", done: false },
    { id: 2, text: "CI/CD 배우기", done: false },
  ]);

  const insert = useCallback(
    (text) => {
      const id = Math.max(...Object.values(todoList).map((D) => D.id));
      const obj = { id, text, done: false };
      setTodoList([...todoList, obj]);
    },
    [todoList]
  );

  const toggle = useCallback(
    (id) => {
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done: false };
          }
          return todo;
        })
      );
    },
    [todoList]
  );

  const remove = useCallback(
    (id) => {
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done: true };
          }
          return todo;
        })
      );
    },
    [todoList]
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
      {todoList.map((todo, idx) => {
        return (
          <TodoItem key={idx} todo={todo} onToggle={toggle} onRemove={remove} />
        );
      })}
    </>
  );
};

export default App;
