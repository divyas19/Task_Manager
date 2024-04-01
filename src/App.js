import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "../src/Components/Form.js";
import ListItems from "../src/Components/ListItems";
import mainLogo from "./Images/mainLogo.png"

function App() {
  //Array to hold all added tasks 
  const [items, setItems] = useState(() => {
    const localVal = localStorage.getItem("VALUES");
    if (localVal === null) return [];
    return JSON.parse(localVal);
  });

  useEffect(() => {
    //Updating local storage for every change in items state 
    localStorage.setItem("VALUES", JSON.stringify(items));
  }, [items]);

  //Function to add tasks in items array
  const addItemsValue = (addItems) => {
    const id = new Date();
    setItems((currentItems) => {
      return [...currentItems, { id: id, title: addItems, done: false }];
    });
  };

  //Function to toggle check based on task completion status
  const toggleDone = (id, done) => {
    setItems((currentItems) => {
      return currentItems.map((value) => {
        if (value.id === id) {
          return { ...value, done };
        }
        return value;
      });
    });
  };

  //Function to remove a particular task from items array
  const onDelete = (id) => {
    setItems((currentItems) => {
      return currentItems.filter((value) => value.id !== id);
    });
  };

  //Function to remove all tasks from items array
  const handleDeleteAll = () => {
    setItems([]);
  };

  return (
    <>
      <header >
        <div className="heading">
          <img src={mainLogo} />
          <h1>TO-DO LIST</h1>
        </div>
      </header>
      <main>
        <Form addItemsValue={addItemsValue} handleDeleteAll={handleDeleteAll} />
        <ListItems items={items} onDelete={onDelete} toggleDone={toggleDone} />
      </main>
    </>
  );
}

export default App;
