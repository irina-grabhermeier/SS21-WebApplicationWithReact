import React from 'react';
import Card from './card';
import DeckOfCards from './deckOfCards';

class GameLogic {

    currentCard: Card | undefined;
    nextCard: Card | undefined;
    usedCards = new Array<Card>();


    private deckOfCards = new DeckOfCards();

    constructor() {
        this.currentCard = this.deckOfCards.pop();
        this.nextCard = this.deckOfCards.pop();
        if (this.currentCard !== undefined) {
            this.usedCards.push(this.currentCard);
        }
    }

    guess(guess: string): boolean | undefined {

        if (this.nextCard === undefined || this.currentCard === undefined) {
            // game is over cause no next card.
            return undefined;
        }

        if (guess === 'higher') {
            if (this.currentCard?.number < this.nextCard?.number) {
                // right guess
                this.currentCard = this.nextCard;
                if (this.currentCard !== undefined) {
                    this.usedCards.push(this.currentCard);
                }
                this.nextCard = this.deckOfCards.pop();
                return true;
            }
        } else if (guess === 'lower') {
            if (this.currentCard?.number > this.nextCard?.number) {
                // right guess
                this.currentCard = this.nextCard;
                if (this.currentCard !== undefined) {
                    this.usedCards.push(this.currentCard);
                }
                this.nextCard = this.deckOfCards.pop();
                return true;
            }
        }
        // wrong guess
        this.currentCard = this.nextCard;
        if (this.currentCard !== undefined) {
            this.usedCards.push(this.currentCard);
        }
        this.nextCard = this.deckOfCards.pop();
        return false;
    }

    isDeckEmpty(): boolean {
        return this.deckOfCards.isDeckEmpty();
    }

}
export default GameLogic;