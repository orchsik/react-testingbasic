import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos.map((todo, idx) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
