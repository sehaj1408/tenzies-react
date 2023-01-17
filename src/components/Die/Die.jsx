import React from "react";
import "./die.css"

export default function Die(props) {;
    return (
        <div 
        className="dice" 
        style={{backgroundColor: props.isClicked ? "#867ebd" : "white"}}
        >
            <button 
            onClick={() => props.handleDiceClick(props.id)}
            >{props.value}</button>
        </div>
    )
}