import { useCallback, useState } from "react";

import { sampleTodos } from "../fixture/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState(sampleTodos);

  const onInsert = useCallback((text) => {
    setTodos((todos) => {
      const id = Math.max(...Object.values(todos).map((D) => D.id)) + 1;
      const obj = { id, text, done: false };
      return [...todos, obj];
    });
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    });
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};
export default TodoApp;
