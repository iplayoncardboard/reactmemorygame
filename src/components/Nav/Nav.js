import React from "react";
import './Nav.css'

//Nav will receive about state

const Nav = props =>(
    <nav>
        I'm the fucking Nav Bar
        <p>{props.message}</p>
        <p>{props.highScore}</p>
        <p>{props.score}</p>
    </nav>
)

export default Nav