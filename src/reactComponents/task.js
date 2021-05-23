import React from 'react'

export const Task = ({todos, onDelete}) => {

    return(
        <div>
           <h3>{todos.title}</h3>
           <p>{todos.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
           <hr></hr>
        </div>
    )
    
}