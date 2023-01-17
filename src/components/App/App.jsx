import React from "react";
import "./app.css"
import Die from "../Die/Die"


export default function App() {
    const [dice, setDice] = React.useState(generateDiceNumbers());

    function generateDiceNumbers() {
        const numbersArray = [];
        for (let i = 0; i < 10; i++) {
            const die = {
                key: i,
                value: (Math.floor(Math.random() * 6) + 1),
                isClicked: false
            }
            numbersArray.push(die);
        } 
        return numbersArray;   
    } 
   
    const diceElements = dice.map(die => {
        return <Die dieKey={die.key} value={die.value} handleDieClick={handleDieClick}/>
    })

    function handleDieClick(num, key) {
        console.log(`clicked: ${num} and ${key}`)
    }

    function handleRoll() {
        setDice(generateDiceNumbers());
    }

    return (
        <main>
            <div className="content">
                <div className="title-container">
                    <h1>Tenzies</h1>
                    <h3>Roll until all dice are the same. 
                        Click each die to freeze it at its current value between rolls.</h3>
                </div>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className="roll-button" onClick={handleRoll}>Roll</button>
            </div>
        </main>
    )
}