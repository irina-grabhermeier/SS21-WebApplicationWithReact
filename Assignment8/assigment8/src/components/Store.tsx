import configData from "./../config.json";
import { makeAutoObservable, runInAction } from 'mobx';

export default class Store {

    private _trendyGifs = new Array<any>();
    private _searchGifs = new Array<any>();

    constructor() {
        this.loadTrendy(0);
        makeAutoObservable(this);
    }

    get trendyGifs() {
        return this._trendyGifs;
    }

    get searchGifs() {
        return this._searchGifs;
    }

    public async search(searchTerm: string, offset: number) {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${configData.API_KEY}&q=${searchTerm}&limit=25&rating=g&lang=en&offset=${offset}`)
            .catch((error) => console.error(error));

        if (res !== undefined) {
            const gifsJson = await res.json();
            runInAction(() => {
                this._searchGifs = gifsJson;
            })

        } else {
            console.log(Error("Problem with loading searched gifs."));
        }
    }

    public async loadTrendy(offset: number) {
        const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${configData.API_KEY}&limit=10&rating=g&offset=${offset}`)
            .catch((error) => console.error(error));

        if (res !== undefined) {
            const gifsJson = await res.json();
            runInAction(() => {
                this._trendyGifs = gifsJson;
            })

        } else {
            console.log(Error("Problem with loading trendy gifs."));
        }
    }

    public destroy(): void {
        this._searchGifs = new Array<any>();
        this._trendyGifs = new Array<any>();
        this.loadTrendy(0);
    }
}