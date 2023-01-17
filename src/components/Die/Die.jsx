import React from "react";
import "./die.css"

export default function Die(props) {;
    return (
        <div className="dice">
            <button onClick={() => props.handleDieClick(props.value, props.dieKey)}>{props.value}</button>
        </div>
    )
}