import DelayedToggle from "./delayed/DelayedToggle";
import Profile from "./profile/Profile";
import Counter from "./counter/Counter";
import TodoApp from "./todo/TodoApp";
import UserProfile from "./restApi/UserProfile";

const App = () => {
  return (
    <>
      <UserProfile id={1} />
      <br />
      <br />
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
