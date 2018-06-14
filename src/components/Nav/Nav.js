import React from "react";
import './Nav.css'

//Nav will receive about state

const Nav = props =>(
    <nav>
        I'm the fucking Nav Bar
        <p>{props.message}</p>
        <p>High Score {props.highScore}</p>
        <p>Score {props.score}</p>
    </nav>
)

export default Nav