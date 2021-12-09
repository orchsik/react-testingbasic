import React from "react";
import Counter from "./counter/Counter";
import Profile from "./profile/Profile";

const App = () => {
  return (
    <>
      <Profile username="액션가면" name="신짱구" />
      <Counter />
    </>
  );
};

export default App;
