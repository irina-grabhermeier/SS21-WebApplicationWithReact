import React, { useState, useEffect } from 'react';
import GameLogic from './gameLogic';

export default function Game() {

    const [isGameRunning, setIsGameRunning] = useState(false);
    const gamelogic = new GameLogic();

    const [score, setScore] = useState(0);

    const startGame = () => {
        setIsGameRunning(true);
    }

    const guessOfHigher = () => {
        const isHigher = gamelogic.guess('higher');
        if (gamelogic.isDeckEmpty() || isHigher === undefined) {
            setIsGameRunning(false);
        }
        if (isHigher) {
            const newScore = score + 1;
            setScore(newScore);
        }
    }

    const guessOfLower = () => {
        const isLower = gamelogic.guess('lower');
        if (gamelogic.isDeckEmpty() || isLower === undefined) {
            setIsGameRunning(false);
        }
        if (isLower) {
            const newScore = score + 1;
            setScore(newScore);
        }
    }

    return (
        <div>
            {!isGameRunning && <button onClick={startGame}>Start</button>}
            {isGameRunning && <div>

                <button onClick={guessOfHigher} disabled={!isGameRunning}>Higher</button>
                <button onClick={guessOfLower} disabled={!isGameRunning}>Lower</button>
                <span>Score: {score}</span>
            </div>}
        </div >
    );
}