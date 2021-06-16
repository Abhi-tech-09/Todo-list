import React from "react" 
import TodoItem from "./TodoItem"

export default function Todos({todo , onDelete}){
    let TodosStyle = {
        minHeight : "70vh" , 
        width : "50 vw"
    } 
    return (
        <div className = "container" style = {TodosStyle}>
            <h3 className = "text-center my-2">Todos List</h3>
            {todo.length !== 0 ? 
                todo.map((todoitem)=>{
                    return <TodoItem todo = {todoitem} key = {todoitem.sno} onDelete = {onDelete}/>
                }) :  <h4>No Todos to Display</h4>
            }
        </div>
    );
}