import React from "react" 
import TodoItem from "./TodoItem"

export default function Todos({todo , onDelete}){
    let TodosStyle = {
        display : "grid" , 
        gridTemplateColumns : "1fr 1fr 1fr 1fr" , 
        gridAutoRows : "minmax(min-content , max-content)" , 
        gridGap : "1px" , 
        minHeight : "70vh" , 
        width : "50 vw"
    } 
    return (
        <>
        <h3 className = "text-center my-2">Todos List</h3>
        <div className = "container" style = {TodosStyle}>
            {todo.length !== 0 ? 
                todo.map((todoitem)=>{
                    return <TodoItem todo = {todoitem} key = {todoitem.sno} onDelete = {onDelete}/>
                }) :  <h4>No Todos to Display</h4>
            }
        </div>
        </>
    );
}