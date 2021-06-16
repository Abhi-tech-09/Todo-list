import React from 'react'

export default function Header() {

    let footerStyle = {
        position: "relative" ,
        width: "100%" ,
        margin : "auto" ,  
        top:"10vh" 
    }
    return (
        <footer className = "bg-dark" style = {footerStyle}>
            <p className = "py-2 text-center text-light">
            Made with &#10084; Sharma Abhishek
            </p>
        </footer>
    );
}

// Copyright &copy; Sharma Abhishek