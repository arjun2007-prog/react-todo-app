import logo from './logo.svg';
import './App.css';
import Navbar from "./reactComponents/navbar"
import {Todo} from "./reactComponents/todo"
import {Footer} from "./reactComponents/footer"
import {Addtodo} from "./reactComponents/addTodo"

import { React, useState } from "react";



function Display() {

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
    localStorage.setItem("todos", JSON.stringify(todoItems))
    console.log(JSON.parse(localStorage.getItem("todos")));
  }
  //Whatever html we write must be returned on the function call so that the html can be used and display. 
  //Theyfore, it is written inside the return function
  const [todoItems, setTodo] = useState([
    // {
    //   sno:1,
    //   title:"Go to Market",
    //   desc:"Buy vegitables and fruits"
    // },
    // {
    //   sno:2,
    //   title:"Go to Mall",
    //   desc:"Buy vegitables and fruits"
    // },
    // {
    //   sno:3,
    //   title:"Go to office",
    //   desc:"Buy vegitables and fruits"
    // }
  ])
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
