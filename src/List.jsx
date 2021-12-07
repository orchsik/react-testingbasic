import React from "react";

export default function List({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.title}</li>;
      })}
    </ul>
  );
}
