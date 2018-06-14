import React from "react";

const Header = props =>(
    <div className="header">
        <h1>I'm the Header </h1>
        {props.children}
    </div>
)

export default Header