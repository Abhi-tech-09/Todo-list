import React from "react"

export default function TodoItem(props) {
    let myStyle = {
    }
    return (
            <div className="card " style = {myStyle}>
                <div className="card-body">
                    <h5 className="card-title ">{props.todo.title}</h5>
                    <p className="card-text ">{props.todo.desc}</p>
                    <button className="btn btn-sm btn-success" onClick={() => { props.onDelete(props.todo) }}>Done</button>
                </div>
            </div>
    );
}