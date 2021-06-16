import React , {useState} from 'react'

export default function AddTodo(props) {
    const [title , seTitle] = useState("") ; 
    const [desc , setDesc] = useState("") ; 

    const submit = (e)=>{
        e.preventDefault() ; 
        if(!title || !desc){
            alert("Title and Description cannot be blank Bro !!")
        }
        else{
            props.addTodo(title , desc) ;
            seTitle(""); 
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Todo Title</strong></label>
                    <input type="text" value = {title} onChange = {(e)=>{seTitle(e.target.value)}}
                    className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"><strong>Todo Description</strong></label>
                    <input type="text" value = {desc} onChange = {(e)=>{setDesc(e.target.value)}}
                    className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
            </form>
        </div>
    );
}