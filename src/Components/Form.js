import React, { useState, useRef, useEffect } from "react";
import "./Form.css";

export default function Form({ addItemsValue, handleDeleteAll }) {

  //To store each task
  const [addItems, setAddItems] = useState("");
  const refInput = useRef(null);

  useEffect(() => { refInput.current.focus() }, [])

  //Function to add each task after submission in items array
  function handleSubmit(event) {
    event.preventDefault();
    if (addItems.length === 0) {
      return alert("Enter some task to add!!!");
    }

    //Adding each task to items array
    addItemsValue(addItems);
    setAddItems("");
  }

  //To invoke deletion of task from items array
  const handleDeleteAllClick = () => {
    handleDeleteAll();
  };

  return (
    <form className=" input-container">
      <label htmlFor="additems">Add Your Items</label>
      <input
        type="text"
        id="additems"
        maxlength="100"
        value={addItems}
        ref={refInput}
        onChange={(event) => {
          setAddItems(event.target.value);
        }}
      />
      <span>
        <button onClick={(event) => handleSubmit(event)}>Add</button>{" "}
        <button onClick={handleDeleteAllClick}>Delete All</button>
      </span>
    </form>
  );
}
