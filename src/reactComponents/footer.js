import React from 'react'

export const Footer = () => {
    let style = {
       position:"relative",
       top:"45vh",
       zIndex: "1"
    }
    return (
        <div className="bg-dark text-light py-4" style={style}>
            <p className="text-center">
               Copyright  &copy; Arjun M.k
            </p>
        </div>
    )
}
