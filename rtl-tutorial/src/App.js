import DelayedToggle from "./delayed/DelayedToggle";
import Profile from "./profile/Profile";
import Counter from "./counter/Counter";
import TodoApp from "./todo/TodoApp";

const App = () => {
  return (
    <>
      <DelayedToggle />
      <br />
      <br />
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
