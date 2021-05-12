import {action, autorun, makeObservable, observable} from 'mobx';
import { Gif, GiphyRequester } from '../services/GiphyRequester';

export class SearchingGifStore {
    @observable search = '';
    @observable page = 1;
    @observable maxPage = 0;
    @observable loading = false;
    @observable gifs: Array<Gif> = [];
    disposer: () => void;

    constructor() {
        makeObservable(this);

        this.disposer = autorun(() => {
            if (this.search === '') {
                return;
            }

            this.setLoading(true);
            GiphyRequester.loadSearch(this.search, this.page)
                .then((response) => {
                    const {total_count} = response.pagination;
                    this.setMaxPage(Math.ceil(total_count / 50));
                    this.setGifs(response.data);
                    this.setLoading(false);
                });
        });
    }

    @action setSearch = (search: string): void => {
        this.search = search;
    }

    @action setPage = (page: number): void => {
        this.page = page;
    }

    @action setMaxPage = (maxPage: number): void => {
        this.maxPage = maxPage;
    }

    @action setGifs(gifs: Array<Gif>): void {
        this.gifs = gifs;
    }

    @action setLoading(loading: boolean): void {
        this.loading = loading;
    }

    destroy(): void {
        this.disposer();
    }
}