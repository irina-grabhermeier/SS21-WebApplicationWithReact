import { observer } from 'mobx-react';
import GiphyComponent from './GiphyComponent';
import Pagination from './Pagination';
import Store from './Store';

const SearchPage = (props: { store: Store }) => {

    var _searchTerm = '';
    var _offset = 0;
    const LIMIT = 25;

    const handleSearch = () => {
        props.store.search(_searchTerm, 0);
    }

    const searchedGifs = (): any => {
        return props.store.searchGifs;
    }

    return (
        <div>
            <h1>Search for Gif</h1>
            <input type='text' id='input' onChange={(event) => { _searchTerm = event.target.value }} />
            <button onClick={handleSearch}>search</button>
            {console.log(searchedGifs())}
            <br />
            <div>
                {(searchedGifs().data !== undefined) ?
                    (searchedGifs().data.map((trendyGif: any) => <GiphyComponent gif={trendyGif} />))
                    : (searchedGifs().data === undefined && _searchTerm !== '') ?
                        <p>loading...</p>
                        : <br />
                }
            </div>
        </div>
    );
}

export default observer(SearchPage);