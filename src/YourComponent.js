import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { yourAction } from "./actions"; // path to your actions file

const YourComponent = () => {
  const dispatch = useDispatch();
  const someState = useSelector((state) => state.someState);

  const handleClick = () => {
    dispatch(yourAction(somePayload));
  };

  return (
    <div>
      <p>{someState}</p>
      <button onClick={handleClick}>Dispatch Action</button>
    </div>
  );
};

export default YourComponent;
