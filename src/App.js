import logo from './logo.svg';
import './App.css';
import Navbar from "./reactComponents/navbar"
import {Todo} from "./reactComponents/todo"
import {Footer} from "./reactComponents/footer"
import {Addtodo} from "./reactComponents/addTodo"
import About from "./reactComponents/about";

import { React, useState, useEffect} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Display() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  console.log(initTodo);

  //function to add todo elements in our list 
  function add(title, desc) {

    // alert("this " + title + " " + desc)
    let serial = todoItems.length + 1

    let newTodo = {
      sno:serial,
      title:title,
      desc:desc
    }
   console.log(newTodo);
   //This is just setting the setTodo to new data which is a array now this array comprises of all the items present in the array 
   //todo items and also the object we just created
    setTodo([...todoItems, newTodo ])
   }

  function Delete(clickedTodo){
    setTodo(todoItems.filter((array)=>{
      return array !== clickedTodo
    }))
    
    
  }
  //Whatever html we write must be returned on the function call so that the html can be used and display. 
  //Theyfore, it is written inside the return function
  const [todoItems, setTodo] = useState(initTodo)
  
  //this is the use effect hook takes 2 parameters a function which it can call and the second parameter
  //must be in an array so in future multiple elements can be passed. Now the way it works is whenever  the variable values are 
  //changed in the array thats when we are going to call this function we passed in the first parameter and it gets executed
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoItems))
  },[todoItems])


  return (
    <>
    {/* This is react router it helps us to move from one page to another*/}
    <Router>
     <Navbar title={"Todo List"} searchBar={true}/>
     {/* Here we are using switch which is gonna display certain components only when ceratain paths the useris present on */}
     {/* But parts outside the switch will always be displayed irespective of the path . This saves rerender time of these parts*/}
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" >
            <>
             <Addtodo add={add} />
             <Todo todos={todoItems} onDelete={Delete}/>
            </>
          </Route>
        </Switch>

     <Footer />
    </Router>
    </>
  );
}

// This tells what to be exported when the file is imported and currently it 
//refers to the function Display
export default Display;
