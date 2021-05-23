import {React, useState} from "react"

export const Addtodo = (props) => {

    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")
     
    function submit(event) {
        //the first parameter in function gets the value of the evnt on whic it was called on
        
        //This helps to prevent default reloding of page which happens when a form is submited
        event.preventDefault()

        if (!title || !desc) {
            alert("Title or decription cannot be left balnk")
        }
        else{
            props.add(title, desc)
        }
        setTitle("")
        setdesc("")
    }

    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Todo title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Decscription</label>
                    <input type="text" value={desc} className="form-control" onChange={(e)=>{setdesc(e.target.value)}} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}