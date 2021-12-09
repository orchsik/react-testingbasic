import Counter from "./counter/Counter";
import Profile from "./profile/Profile";

import TodoApp from "./todo/TodoApp";

const App = () => {
  return (
    <>
      <Profile username="액션가면" name="신짱구" />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <TodoApp />
    </>
  );
};

export default App;
