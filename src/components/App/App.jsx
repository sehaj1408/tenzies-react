import React from "react";
import "./app.css"

export default function App() {
    return (
        <main>
            <div className="content">
                <div className="title-container">
                    <h1>Tenzies</h1>
                    <h3>Roll until all dice are the same. 
                        Click each die to freeze it at its current value between rolls.</h3>
                </div>
                <div className="dice-container">
                    <h1>1</h1>
                </div>
                <button className="roll-button">Roll</button>
            </div>
        </main>
    )
}