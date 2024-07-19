import React, { useState } from "react";

function TodoItem({ task, dispatch }) {
  const [editText, setEditText] = useState(task.text);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSaveEdit = () => {
    dispatch({
      type: "UPDATE_TODO",
      task: { ...task, text: editText },
    });
  };

  return (
    <li>
      {task.editing ? (
        <div>
          <input type="text" value={editText} onChange={handleEditChange} />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => dispatch({ type: "TOGGLE_TODO", id: task.id })}
          />
          {task.text}
          <button
            onClick={() => dispatch({ type: "START_EDITING", id: task.id })}
          >
            Edit
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", id: task.id })}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
