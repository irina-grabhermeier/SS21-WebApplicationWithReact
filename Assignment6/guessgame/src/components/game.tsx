import React, { useState } from 'react';
import GameLogic from './gameLogic';

export default function Game() {

    const [gameLogic, setGameLogic] = useState(new GameLogic());
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [currentCard, setCurrentCard] = useState(gameLogic.currentCard);


    const startGame = () => {
        setGameStarted(true);
    }

    const guessOfHigher = () => {
        const isHigher = gameLogic.guess('higher');

        if (isHigher) {
            const newScore = score + 1;
            setScore(newScore);
        }
        setCurrentCard(gameLogic.currentCard);
    }

    const guessOfLower = () => {
        const isLower = gameLogic.guess('lower');
        if (isLower) {
            const newScore = score + 1;
            setScore(newScore);
        }
        setCurrentCard(gameLogic.currentCard);
    }

    const guessOfEqual = () => {
        const isEqual = gameLogic.guess('equal');
        if (isEqual) {
            const newScore = score + 1;
            setScore(newScore);
        }
        setCurrentCard(gameLogic.currentCard);
    }

    const reset = () => {
        const newGameLogic = new GameLogic();
        setGameLogic(newGameLogic);
        setGameStarted(false);
        setScore(0);
        setCurrentCard(newGameLogic.currentCard)
    }


    const imageSource = (): string => {
        switch (currentCard?.suit) {
            case 'Clubs':
                return '/Card_club.svg.png';
            case 'Diamonds':
                return '/Card_diamond.svg.png';
            case 'Hearts':
                return '/Card_heart.svg.png';
            case 'Spades':
                return '/Card_spade.svg.png';
            default: return '';
        }
    }

    const showCardValue = (value: number): string => {
        switch (value) {
            case 1: return 'A'
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            default: return value.toString();
        }
    }

    return (
        <div>
            {!gameStarted && <button onClick={startGame}>Start</button>}
            {gameStarted && <div>

                <img src={imageSource()} height='200' width='200' /><span>{showCardValue(currentCard !== undefined ? currentCard.number : 0)}</span>
                {console.log(gameLogic.currentCard)}{console.log(gameLogic.isDeckEmpty())}
                <button onClick={guessOfHigher} disabled={gameLogic.isDeckEmpty()}>Higher</button>
                <button onClick={guessOfLower} disabled={gameLogic.isDeckEmpty()}>Lower</button>
                <button onClick={guessOfEqual} disabled={gameLogic.isDeckEmpty()}>Equal</button>
                <button onClick={reset} >Reset</button>
                <span>Score: {score}</span>
            </div>}
        </div >
    );
}