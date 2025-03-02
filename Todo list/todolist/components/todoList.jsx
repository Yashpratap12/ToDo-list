import { useState } from "react";
import Todoitem from "./todoItem";
import "../src/style.css";
function TodoList() {
  const [internalValue, setInternalValue] = useState("");
  const [internalResult, setinternalResult] = useState([]);
  function handleClick() {
    internalValue == ""
      ? alert("Please enter a event")
      : setinternalResult([
          ...internalResult,
          { inputValue: internalValue, id: Date.now().toString() },
        ]);
  }
  return (
    <>
      <div className="container">
        <input
          type="text"
          value={internalValue}
          placeholder="Enter the events...."
          onChange={(e) => setInternalValue(e.target.value)}
        />
        <button onClick={handleClick}>+</button>
      </div>
      {internalResult.map((data) => (
        <Todoitem
          id={data.id}
          inputValue={data.inputValue}
          internalResult={internalResult}
          setinternalResult={setinternalResult}
        />
      ))}
    </>
  );
}
export default TodoList;
