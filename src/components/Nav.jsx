import React from "react";
import {FaMoon} from "react-icons/fa";
import "./style.css"

function Nav(){
    return(
        <nav>
            <h3>Where in the world?</h3>
            <button><FaMoon/> Dark Mode</button>
        </nav>
    )
}

export default Nav;