import React from "react";
import Card, { Suit } from "./card";

class DeckOfCards {

    private deck = new Array<Card>();

    constructor() {
        this.initDeckOfCards();
    }

    private initDeckOfCards() {
        for (var i = 1; i <= 13; i++) {
            this.deck.push(new Card('Clubs', i));
        }
        for (var i = 1; i <= 13; i++) {
            this.deck.push(new Card('Diamonds', i));
        }
        for (var i = 1; i <= 13; i++) {
            this.deck.push(new Card('Hearts', i));
        }
        for (var i = 1; i <= 13; i++) {
            this.deck.push(new Card('Spades', i));
        }

        this.deck = this.deck.sort(() => Math.random() - 0.5);
    }

    pop() {
        return this.deck.pop();
    }

    isDeckEmpty(): boolean {
        return this.deck.length > 0 ? false : true;
    }

}

export default DeckOfCards;