import React from "react"

//this helps us to work more closely with props
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


function Navabar(props) {
    return(

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">{props.title}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
      </ul>
      {
        //This ternery operator used in JSX it checks is a boolean variable is true and if so it 
        //exexutes a piece of code(it should be written just bellow the checking statement).
        //And after the code that should be executed this symbol ':' should be put and the code that should be exuted if the variable is false should be written
        props.searchBar?
        <form class="d-flex">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        //code executed when searchBar is false
        ://relacemen of else:
        "no search bar lol"}
    </div>
  </div>
</nav>

    );
}

//Here we can set prop values that we display when no value is passed by prent component 
Navabar.defaultProps = {
  title:"your Title",
  searchBar:true
}

//This helps us to set a particular datattype for each prop in a function component
Navabar.propTypes = {
  //Here this tells us that the prop value title is required and should be string else 
  //it gives us warnings
  title:  PropTypes.string.isRequired
}

export default Navabar