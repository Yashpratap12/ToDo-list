import { useState } from "react";
import "../src/style.css";
function Todoitem(props) {
  const [completed, setCompleted] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(props.inputValue);

  function handleCompletion() {
    setCompleted((data) => !data);
  }

  const handleDeletion = (id) => () => {
    const result = props.internalResult.filter((el) => el.id !== id);
    props.setinternalResult(result);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    const updatedResult = props.internalResult.map((item) =>
      item.id === props.id ? { ...item, inputValue: editValue } : item
    );
    props.setinternalResult(updatedResult);
    setEditMode(false);
  };

  return (
    <>
      <div className="display">
        {editMode ? (
          <>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <span className={completed && "todoEvent"}>{props.inputValue}</span>
        )}
        <div className="buttons">
          {!editMode && <button onClick={handleEdit}>Edit</button>}
          <button onClick={handleDeletion(props.id)}>Delete</button>
          <button onClick={handleCompletion}>
            {completed ? "Undo" : "Mark as Completed"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
