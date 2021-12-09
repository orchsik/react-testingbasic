import { useCallback, useState } from "react";

import { sampleTodos } from "../fixture/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState(sampleTodos);

  const onInsert = useCallback(
    (text) => {
      const id = Math.max(...Object.values(todos).map((D) => D.id)) + 1;
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
            return { ...todo, done: !todo.done };
          }
          return todo;
        })
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};
export default TodoApp;
