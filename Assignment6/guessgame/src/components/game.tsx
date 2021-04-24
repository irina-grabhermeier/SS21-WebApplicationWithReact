import React, { useState } from 'react';
import GameDiv from '../GameDiv';
import Button from './button';
import CardDiv from './cardDiv';
import CardSpan from './cardSpan';
import GameLogic from './gameLogic';
import { observer } from "mobx-react";
import { autorun } from 'mobx';

const Game = () => {

    const gameLogic = new GameLogic();
    const [gameStarted, setGameStarted] = useState(false);


    autorun(() => {
        console.log(gameLogic.currentCard);
        console.log(gameLogic.score);
    })

    const startGame = () => {
        setGameStarted(true);
    }

    const guessOfHigher = () => {
        const isHigher = gameLogic.guess('higher');
    }

    const guessOfLower = () => {
        const isLower = gameLogic.guess('lower');
    }

    const guessOfEqual = () => {
        const isEqual = gameLogic.guess('equal');
    }

    const reset = () => {
        //gameLogic = new GameLogic();
        setGameStarted(false);
    }


    const imageSource = (): string => {
        switch (gameLogic.currentCard?.suit) {
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
                    <CardSpan isLeft={true} suit={gameLogic.currentCard?.suit}
                        content={gameLogic.currentCard !== undefined ? gameLogic.currentCard.number.toString() : ''} />
                    <img src={imageSource()} height='200' width='200' />

                    <CardSpan isLeft={false} suit={gameLogic.currentCard?.suit}
                        content={gameLogic.currentCard !== undefined ? gameLogic.currentCard.number.toString() : ''} />
                </CardDiv>

                <Button onClick={() => gameLogic.guess('higher')} disabled={gameLogic.isDeckEmpty}>Higher</Button>
                <Button onClick={() => gameLogic.guess('lower')} disabled={gameLogic.isDeckEmpty}>Lower</Button>
                <Button onClick={() => gameLogic.guess('equal')} disabled={gameLogic.isDeckEmpty}>Equal</Button>
                <Button onClick={reset} >Reset</Button>
                <br />
                <span style={{ fontWeight: 'bold', fontSize: 24, color: 'indigo' }}>Score: {gameLogic.score}</span>
            </div>}
        </GameDiv >

    );
}

export default observer(Game);