import React from "react";
import Counter from "./counter/Counter";
import Profile from "./profile/Profile";
import TodoForm from "./todo/TodoForm";

const App = () => {
  return (
    <>
      <Profile username="액션가면" name="신짱구" />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <TodoForm />
    </>
  );
};

export default App;
