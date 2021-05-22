import logo from './logo.svg';
import './App.css';
import Navbar from "./reactComponents/navbar"
import {Todo} from "./reactComponents/todo"
import {Footer} from "./reactComponents/footer"
import {Addtodo} from "./reactComponents/addTodo"

import { React, useState, useEffect} from "react";



function Display() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  console.log(initTodo);

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

    localStorage.setItem("todos", JSON.stringify(todoItems))
   }

  function Delete(clickedTodo){
    setTodo(todoItems.filter((array)=>{
      return array !== clickedTodo
    }))
    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todoItems))
    },[todoItems])
    
  }
  //Whatever html we write must be returned on the function call so that the html can be used and display. 
  //Theyfore, it is written inside the return function
  const [todoItems, setTodo] = useState(initTodo)
  return (
    <>
    <Navbar title={"Todo List"} searchBar={true}/>
    <Addtodo add={add} />
    <Todo todos={todoItems} onDelete={Delete}/>
    <Footer />
    </>
  );
}

// This tells what to be exported when the file is imported and currently it 
//refers to the function Display
export default Display;
