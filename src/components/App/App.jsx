import React from "react";
import "./app.css";
import Die from "../Die/Die";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
    const [dice, setDice] = React.useState(generateDiceNumbers());
    const [gameStatus, setGameStatus] = React.useState(false);

    React.useEffect(() => {
        const diceValues = [];
        dice.map(die => {
            if (die.isClicked) {
                diceValues.push(die.value)
            }
            else {
                return;
            }
        })
        if (diceValues.length === 10) {
            const allEqual = arr => arr.every(v => v === arr[0])
            allEqual(diceValues) && setGameStatus(true);
        }
    }, [dice])

    function generateDiceNumbers() {
        const numbersArray = [];
        for (let i = 0; i < 10; i++) {
            const die = createNewDie();
            numbersArray.push(die);
        } 
        return numbersArray;   
    } 
   
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

    function createNewDie() {
        return {
            id: nanoid(),
            value: (Math.floor(Math.random() * 6) + 1),
            isClicked: false
        }
    }

    function handleRoll() {
        const allDice = [];

        dice.map(die => {
            if (die.isClicked) {
                allDice.push(die)
            }
            else {
                const newDie = createNewDie();
                allDice.push(newDie);
            }
        })

        setDice(allDice);
    }

    return (
        <main>
            <div className="content">
                {gameStatus && <Confetti />}
                <div className="title-container">
                    <h1>Tenzies</h1>
                    <h3>Roll until all dice are the same. 
                        Click each die to freeze it at its current value between rolls.</h3>
                </div>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button className="roll-button" onClick={handleRoll}>
                    {gameStatus ? "New Game" : "Roll"}
                </button>
            </div>
        </main>
    )
}