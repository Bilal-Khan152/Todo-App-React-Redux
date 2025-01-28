import React  from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; // we use dispatch because we want to delete a todo means ka dubara sa store
// update krna ha bhaijna ha ka ham delete krna chahta ha
import { removeTodo } from "../feature/Todo/TodoSice";

function Todos({setInput ,startEditing , setBtn} ) {

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch() ;
    

     
   return (
    <>
      <div className="text-light">
        <div className="row ">
          <div className="col-6 m-auto  ">
            {todos.map((todo) => (
              <li key={todo.id} className="List">
                {todo.text}
                <span className="text-danger delete ">

                  <button
                   onClick= {()=>{
                    
                    setInput(todo.text)
                    startEditing(todo.id,todo.text)
                    setBtn(false)
                   }}          
                   className="text-dark bg-success fw-bold me-2 delete-btn"
                  
                  >update</button>
                  
                  <button
                    className="text-dark bg-danger fw-bold delete-btn"                
                    onClick={() => {
                      dispatch(removeTodo(todo.id))
                       
                    }}
                    >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
