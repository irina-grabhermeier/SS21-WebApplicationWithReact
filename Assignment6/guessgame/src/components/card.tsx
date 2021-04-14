import React from 'react';

export type Suit = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades';

class Card {

    suit:Suit;
    number:number;

    constructor(suit: Suit, number:number) {
        this.suit = suit;
        this.number = number;
    }

}

export default Card;