import { observer } from 'mobx-react';
import React from 'react';
import GiphyComponent from './GiphyComponent';
import Store from './Store';

const SearchPage = (props: { store: Store }) => {

    var searchTerm = '';

    const handleSubmit = () => {
        props.store.search(searchTerm, 0);
    }

    const searchedGifs = (): any => {
        return props.store.searchGifs;
    }

    return (
        <div>
            <h1>Search for Gif</h1>
            <input type='text' id='input' onChange={(event) => { searchTerm = event.target.value }} />
            <button onClick={handleSubmit}>search</button>
            <div>
                {(searchedGifs().data !== undefined) ?
                    (searchedGifs().data.map((trendyGif: any) => <GiphyComponent gif={trendyGif} />))
                    : <br />
                }
            </div>
        </div>
    );
}

export default observer(SearchPage);