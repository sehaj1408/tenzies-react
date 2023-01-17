import React from "react";
import "./app.css";
import Die from "../Die/Die";
import { nanoid } from 'nanoid';


export default function App() {
    const [dice, setDice] = React.useState(generateDiceNumbers());

    function generateDiceNumbers() {
        const numbersArray = [];
        for (let i = 0; i < 10; i++) {
            const die = {
                id: nanoid(),
                value: (Math.floor(Math.random() * 6) + 1),
                isClicked: false
            }
            numbersArray.push(die);
        } 
        return numbersArray;   
    } 
    console.log(dice);
   
    const diceElements = dice.map(die => {
        return <Die 
        handleDiceClick={handleDiceClick} 
        key={die.id} 
        id={die.id}
        value={die.value} 
        isClicked={die.isClicked}
        />
    })

    function handleDiceClick(id) {
        const diceArray = [];

        dice.map(dieObject => {
            if (dieObject.id === id) {
                diceArray.push({
                    ...dieObject,
                    isClicked: !dieObject.isClicked
                })
            }
            else {
                diceArray.push({
                    ...dieObject
                })
            }
        })

        setDice(diceArray);
    }

    function handleRoll() {
        const allDice = [];

        dice.map(die => {
            if (die.isClicked) {
                allDice.push(die)
            }
            else {
                const newDie = {
                    id: nanoid(),
                    value: (Math.floor(Math.random() * 6) + 1),
                    isClicked: false
                }
                allDice.push(newDie);
            }
        })

        setDice(allDice);
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