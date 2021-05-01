import { observer, useLocalObservable } from "mobx-react-lite";
import GiphyComponent from './GiphyComponent';
import Store from './Store';
import PaginationData from './PaginationData';
import Pagination from "./Pagination";

const SearchPage = (props: { store: Store }) => {

    var _searchTerm = '';

    const createPaginationData = (): PaginationData => {
        return new PaginationData();
    }

    const paginationData = useLocalObservable(createPaginationData);

    const searchedGifs = (): any => {
        return props.store.searchGifs;
    }

    const handleSearch = () => {
        props.store.search(_searchTerm, 0);
    }

    const prevFuncPagination = () => {
        paginationData.decreaseOffset();
        console.log(paginationData.offset);
        props.store.search(_searchTerm, paginationData.offset);
    }

    const nextFuncPagination = () => {
        paginationData.increaseOffset();
        console.log(paginationData.offset);
        props.store.search(_searchTerm, paginationData.offset);
    }

    const setPagePagination = (inputNumber: number) => {
        paginationData.setPage(inputNumber);
        console.log(paginationData.offset);
        props.store.search(_searchTerm, paginationData.offset);
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
            <div>
                <Pagination
                    currentPage={paginationData.pageNumber}
                    pageLimit={paginationData.pageLimit}
                    prevFunc={prevFuncPagination}
                    nextFunc={nextFuncPagination}
                    inputOnChange={(num: number) => setPagePagination(num)}
                />
            </div>
        </div>
    );
}

export default observer(SearchPage);