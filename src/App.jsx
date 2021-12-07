import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ListContainer from "./ListContainer";

export default function App() {
  return (
    <div>
      <h1>To-do</h1>
      <ListContainer />
    </div>
  );
}
