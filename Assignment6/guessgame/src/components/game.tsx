import React, { useState } from 'react';
import GameDiv from '../GameDiv';
import Button from './button';
import CardDiv from './cardDiv';
import CardSpan from './cardSpan';
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

        <GameDiv>
            {!gameStarted && <Button onClick={startGame}>Start</Button>}
            {gameStarted && <div>

                <CardDiv>
                    <CardSpan isLeft={true} suit={currentCard?.suit}
                        content={currentCard !== undefined ? showCardValue(currentCard.number) : ''} />
                    <img src={imageSource()} height='200' width='200' />

                    <CardSpan isLeft={false} suit={currentCard?.suit}
                        content={currentCard !== undefined ? showCardValue(currentCard.number) : ''} />
                </CardDiv>

                <Button onClick={guessOfHigher} disabled={gameLogic.isDeckEmpty()}>Higher</Button>
                <Button onClick={guessOfLower} disabled={gameLogic.isDeckEmpty()}>Lower</Button>
                <Button onClick={guessOfEqual} disabled={gameLogic.isDeckEmpty()}>Equal</Button>
                <Button onClick={reset} >Reset</Button>
                <br />
                <span style={{ fontWeight: 'bold', fontSize: 24, color: 'indigo' }}>Score: {score}</span>
            </div>}
        </GameDiv >

    );
}