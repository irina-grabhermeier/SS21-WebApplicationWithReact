import { makeAutoObservable } from 'mobx';

export default class PaginationData {

    private _offset: number;
    private _pageNumber: number;
    private LIMIT: number;
    private PAGE_LIMIT;

    constructor() {
        this._offset = 0;
        this.LIMIT = 25;
        this._pageNumber = 0;
        this.PAGE_LIMIT = 40;
        makeAutoObservable(this);
    }

    public get offset() {
        return this._offset;
    }
    public get pageNumber() {
        return this._pageNumber;
    }

    public get limit() {
        return this.LIMIT;
    }

    public get pageLimit() {
        return this.PAGE_LIMIT;
    }

    public increaseOffset() {
        if (this._offset < this.PAGE_LIMIT) {
            this._offset = this._offset + this.LIMIT;
            this._pageNumber += 1;
        }
    }

    public decreaseOffset() {
        if (this._offset > 0) {
            this._offset = this._offset - this.LIMIT;
            this._pageNumber -= 1;
        }
    }

    public setOffset(offsetNum: number) {
        // Check that given num is not higher than the page limitation.
        if (offsetNum > this.PAGE_LIMIT * this.LIMIT) {
            offsetNum = this.PAGE_LIMIT * this.LIMIT;
        }
        if (offsetNum < 0) {
            offsetNum = 0;
        }
        this._offset = offsetNum;
        this._pageNumber = Math.ceil(offsetNum / this.LIMIT);
    }

    public setPage(pageNum: number) {
        if (pageNum > this.PAGE_LIMIT) {
            pageNum = this.PAGE_LIMIT
        }
        if (pageNum < 0) {
            pageNum = 0;
        }

        this._pageNumber = pageNum;
        this._offset = pageNum * this.LIMIT;
    }
}