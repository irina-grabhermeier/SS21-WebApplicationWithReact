import React, { useState, useEffect } from 'react';
import GameLogic from './gameLogic';

export default function Game() {

    const [isGameRunning, setIsGameRunning] = useState(false);
    const [gameLogic, setGameLogic] = useState(new GameLogic())

    const [score, setScore] = useState(0);

    const startGame = () => {
        setIsGameRunning(true);
    }

    const guessOfHigher = () => {
        const isHigher = gameLogic.guess('higher');
        if (gameLogic.isDeckEmpty() || isHigher === undefined) {
            setIsGameRunning(false);
        }
        if (isHigher) {
            const newScore = score + 1;
            setScore(newScore);
        }
    }

    const guessOfLower = () => {
        const isLower = gameLogic.guess('lower');
        if (gameLogic.isDeckEmpty() || isLower === undefined) {
            setIsGameRunning(false);
        }
        if (isLower) {
            const newScore = score + 1;
            setScore(newScore);
        }
    }

    const imageSource = (): string => {
        switch (gameLogic.currentCard?.suit) {
            case 'Clubs':
                return '/Card_club.svg.png';
            case 'Diamonds':
                return '/Card_diamond.svg.png';
            case 'Hearts':
                return '/Card_hearts.svg.png';
            case 'Spades':
                return '/Card_spade.svg.png';
            default: return '';
        }
    }

    return (
        <div>
            {!isGameRunning && <button onClick={startGame}>Start</button>}
            {isGameRunning && <div>

                <img src={imageSource()} /><span>{gameLogic.currentCard?.number}</span>
                <button onClick={guessOfHigher} disabled={gameLogic.isDeckEmpty()}>Higher</button>
                <button onClick={guessOfLower} disabled={gameLogic.isDeckEmpty()}>Lower</button>
                <span>Score: {score}</span>
            </div>}
        </div >
    );
}