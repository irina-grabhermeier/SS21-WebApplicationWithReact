import React, { useEffect } from 'react';
import {observer, useLocalObservable} from 'mobx-react';
import { TrendingGifStore } from '../stores/TrendingGifStore';
import Gifs from './Gifs';
import Pagination from './Pagination';

function createTrendingGifStore(): TrendingGifStore {
    return new TrendingGifStore();
}

export default observer(function Trending(): JSX.Element {
    const trendingGifStore = useLocalObservable(createTrendingGifStore);

    useEffect(() => {
        return () => trendingGifStore.destroy();
    }, []);

    return (
        <>
            <h1>Trending</h1>
            <Pagination maxPage={trendingGifStore.maxPage} onPageChange={trendingGifStore.setPage} page={trendingGifStore.page} />
            {trendingGifStore.loading
                ? <p>Loading...</p>
                : <Gifs gifs={trendingGifStore.gifs} />
            }
        </>
    );
})