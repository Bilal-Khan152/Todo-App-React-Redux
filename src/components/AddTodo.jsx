/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState }  from "react";
import {  useSelector } from "react-redux";


//import { useEffect } from "react";

function AddTodo({
  input,
  addTodoHandler,
  handleOnchangeEvent,
  setInput,
  handleUpdate,
   setBtn ,
   btn 
}) {
  

  const todos = useSelector((state) => state.todos);

  return (
    <form onSubmit={addTodoHandler} className="text-center mt-3 ">
      <input
        type="text"
        className="p-2 input"
        placeholder="Enter a Todo....."
        value={input}
        onChange={handleOnchangeEvent}
      />
{   
       
      btn===true ? 
      <button type="submit" className="ms-2 p-2 Btn fw-bold">
        Add Todo
      </button>  
      :btn===false&&<button
         onClick={handleUpdate}
         type="button"
         className="ms-2 p-2 Btn fw-bold"
       >
         Update Todo
       </button> 
     }
    </form>
  );
}
export default AddTodo;
