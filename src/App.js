import React , {useEffect, useState} from 'react'
import './App.css';
import Header from "./myComponents/Header"
import Footer from "./myComponents/Footer"
import Todos from './myComponents/Todos' 
import AddTodo from "./myComponents/AddTodo"
import About from "./myComponents/About"
import {
  BrowserRouter as Router , 
  Switch , 
  Route
} from "react-router-dom"
//We will be using function based components , since it is good for beginners
function App() {
  let initTodo ;
 

  if(localStorage.getItem("todos") === null){
    initTodo = [] ; 
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  

  
    const  onDelete = (todo)=>{
      // let index = todos.indexOf(todo) ; 
      // todos.splice(index , 1) ;
      setTodos(todos.filter((e)=>{
        return e !== todo ;
      }))  
      localStorage.setItem("todos" , JSON.stringify(todos)) ;
    }
    
    const addTodo = (title , desc)=>{ 
      let sn_no ; 
      if(todos.length === 0)
        sn_no = 0 ;
      else
        sn_no = todos.length + 1 ; 
      const myTodo = {
        sno : sn_no , 
        title : title , 
        desc : desc 
      }
    console.log(myTodo) ; 
    // todos.push(myTodo) ; 
    setTodos([...todos , myTodo]);
    console.log("TODOS" , todos) ; 
  }                                                                                                                    
  const [todos , setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos)) ; 
    } , [todos]) ; 
  
  
    return (
    <>
    <Router>
    <Header title = "Abhishek's" />

    <Switch>
      <Route exact path = "/" render = {()=>{
        return (<>
          <AddTodo addTodo = {addTodo}/>
          <Todos  todo = {todos} onDelete = {onDelete}/>
          </>)
      }}>

      </Route>
      <Route exact path = "/about" render = {()=>{
        return (<>
        <About/>
        </>)
      }}>

      </Route>
    </Switch>


    <Footer/>
    </Router>
    </>

  );
}

export default App;
