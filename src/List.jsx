import React from "react";

export default function List({ tasks }) {
  if (tasks.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <ol>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.title}
            <button type="button">완료</button>
          </li>
        );
      })}
    </ol>
  );
}
