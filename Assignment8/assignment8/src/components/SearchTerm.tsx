import { makeAutoObservable } from 'mobx';

export default class SearchTerm {

    private _term: string

    constructor() {
        this._term = '';
        makeAutoObservable(this);
    }

    public get term() {
        return this._term;
    }

    public setTerm(text: string) {
        this._term = text;
    }

}