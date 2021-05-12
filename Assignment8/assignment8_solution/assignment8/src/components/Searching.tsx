import React, { useEffect } from 'react';
import {observer, useLocalObservable} from 'mobx-react';
import Gifs from './Gifs';
import Pagination from './Pagination';
import {SearchingGifStore} from '../stores/SearchingGifStore';

function createSearchingGifStore(): SearchingGifStore {
    return new SearchingGifStore();
}

export default observer(function Searching(): JSX.Element {
    const searchingGifStore = useLocalObservable(createSearchingGifStore);

    useEffect(() => {
        return () => searchingGifStore.destroy();
    }, []);

    return (
        <>
            <h1>Searching</h1>
            <input
                type="text"
                onChange={(event) => searchingGifStore.setSearch(event.currentTarget.value)}
                value={searchingGifStore.search}
            />

            <Pagination maxPage={searchingGifStore.maxPage} onPageChange={searchingGifStore.setPage} page={searchingGifStore.page} />
            {searchingGifStore.loading
                ? <p>Loading...</p>
                : <Gifs gifs={searchingGifStore.gifs} />
            }
        </>
    );
})