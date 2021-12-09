import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo, idx) => {
        return (
          <TodoItem
            key={idx}
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
