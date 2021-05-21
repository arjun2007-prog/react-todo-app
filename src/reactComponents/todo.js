import React from 'react'
import {Task} from "./task.js"

export const Todo = (props) => {
    return (
        <div className="container ">
            <h3 className="text-center my-3">Todo List</h3>
            {/* This map is just a way to loop through a array and work on each element of a array */}
            {/* the parameter of the function it calls contains the current element it is looping through */}
            {props.todos.map((todo)=>{
                //this is taking that element and sending it as a prop to task
                
                return <Task todos={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
            
        </div>
    )
}

