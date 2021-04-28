import React from 'react';
import configData from "./../config.json";
import { makeAutoObservable } from 'mobx';

export default class Store {

    private _trendyGifs = [];
    private _searchGifs = [];

    constructor() {
        this.loadTrendy();
        makeAutoObservable(this);
    }


    get trendyGifs() {
        return this._trendyGifs;
    }

    get searchGifs() {
        return this._searchGifs;
    }

    public async search(searchTerm: string) {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${configData.API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
            .catch((error) => console.error(error));

        if (res != undefined) {
            this._searchGifs = await res.json();
        } else {
            console.log(Error("Problem with loading searched gifs."));
        }
    }

    public async loadTrendy() {
        const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${configData.API_KEY}&limit=25&rating=g`)
            .catch((error) => console.error(error));

        if (res != undefined) {
            this._trendyGifs = await res.json();
        } else {
            console.log(Error("Problem with loading trendy gifs."));
        }
    }
}