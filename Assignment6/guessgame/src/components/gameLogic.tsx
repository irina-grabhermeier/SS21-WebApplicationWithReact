import { makeAutoObservable } from 'mobx';
import Card from './card';
import DeckOfCards from './deckOfCards';

export type GuessType = 'higher' | 'lower' | 'equal';

class GameLogic {

    private _currentCard: Card | undefined;
    private _nextCard: Card | undefined;
    private _usedCards = new Array<Card>();
    private _score = 0;
    private _isDeckEmpty: boolean = false;


    private deckOfCards = new DeckOfCards();

    constructor() {
        this._currentCard = this.deckOfCards.pop();
        this._nextCard = this.deckOfCards.pop();
        if (this._currentCard !== undefined) {
            this._usedCards.push(this._currentCard);
        }
        makeAutoObservable(this);
    }

    public guess(guess: GuessType) {

        if (this._nextCard === undefined || this._currentCard === undefined) {
            // game is over cause no next card.
            return;
        }

        if (guess === 'higher') {
            if (this._currentCard?.number < this._nextCard?.number) {
                // right guess
                this._currentCard = this._nextCard;
                if (this._currentCard !== undefined) {
                    this._usedCards.push(this._currentCard);
                }
                this._nextCard = this.deckOfCards.pop();
                this._score += 1;
            }
        } else if (guess === 'lower') {
            if (this._currentCard?.number > this._nextCard?.number) {
                // right guess
                this._currentCard = this._nextCard;
                if (this._currentCard !== undefined) {
                    this._usedCards.push(this._currentCard);
                }
                this._nextCard = this.deckOfCards.pop();
                this._score += 1;
            }
        } else if (guess === 'equal') {
            if (this._currentCard?.number === this._nextCard?.number) {
                // right guess
                this._currentCard = this._nextCard;
                if (this._currentCard !== undefined) {
                    this._usedCards.push(this._currentCard);
                }
                this._nextCard = this.deckOfCards.pop();
                this._score += 1;
            }
        }
        // wrong guess
        this._currentCard = this._nextCard;
        if (this._currentCard !== undefined) {
            this._usedCards.push(this._currentCard);
        }

        this._nextCard = this.deckOfCards.pop();
        this._isDeckEmpty = this.deckOfCards.isDeckEmpty();
    }

    public get isDeckEmpty(): boolean {
        return this._isDeckEmpty;
    }

    public get score(): number {
        return this._score;
    }

    public get currentCard(): Card | undefined {
        return this._currentCard;
    }

}
export default GameLogic;