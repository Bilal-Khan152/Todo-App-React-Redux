import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { addTodo, updateTodo, loadTodos } from "./feature/Todo/TodoSice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [input, setInput] = React.useState("");

  const [editId, setEditId] = React.useState(null); // Track the ID of the todo being edited
  const [btn, setBtn] = useState(true);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      // alert("Please enter a Todo");
    } else {
      dispatch(addTodo(input));
      setInput(""); // to clean the input value after press the add Todo button
    }
  };

  const handleOnchangeEvent = (e) => {
    setInput(e.target.value);
  };

  const handleUpdate = () => {
    if (editId) {
      dispatch(
        updateTodo({
          id: editId,
          text: input,
        })
      );

      setEditId(null); // Reset editId after updating
      setInput(""); // Clear input after updating
      setBtn(true);
    }

  };

  const startEditing = (id, text) => {
    setEditId(id); // Set the current todo ID as the one being edited
    setInput(text); // Populate input with the current todo text
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        if (parsedTodos && Array.isArray(parsedTodos)) {
          dispatch(loadTodos(parsedTodos));
        }
      } catch (error) {
        console.error("Error parsing JSON from localStorage", error);

        localStorage.removeItem("todos");
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container ">
      <div className="row text-center">
        <div className="col-12">
          <p className=" mt-3 head"> Todo List App </p>
        </div>
      </div>

      <AddTodo
        input={input}
        addTodoHandler={addTodoHandler}
        handleOnchangeEvent={handleOnchangeEvent}
        handleUpdate={handleUpdate}
        setInput={setInput}
        btn={btn}
        setBtn={setBtn}
      />
      <br />

      <hr className="text-light" />
      <Todos setInput={setInput} startEditing={startEditing} setBtn={setBtn} />
    </div>
  );
}

export default App;
