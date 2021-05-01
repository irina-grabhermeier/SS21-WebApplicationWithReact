import { observer, useLocalObservable } from "mobx-react-lite";
import GiphyComponent from './GiphyComponent';
import Store from './Store';
import PaginationData from './PaginationData';
import Pagination from "./Pagination";
import SearchTerm from "./SearchTerm";

const SearchPage = (props: { store: Store }) => {

    const searchTerm = useLocalObservable(() => new SearchTerm());

    const createPaginationData = (): PaginationData => {
        return new PaginationData();
    }

    const paginationData = useLocalObservable(createPaginationData);

    const searchedGifs = (): any => {
        return props.store.searchGifs;
    }

    const handleSearch = () => {
        props.store.search(searchTerm.term, 0);
    }

    const prevFuncPagination = () => {
        paginationData.decreaseOffset();
        props.store.search(searchTerm.term, paginationData.offset);
    }

    const nextFuncPagination = () => {
        paginationData.increaseOffset();
        props.store.search(searchTerm.term, paginationData.offset);
    }

    const setPagePagination = (inputNumber: number) => {
        paginationData.setPage(inputNumber);
        props.store.search(searchTerm.term, paginationData.offset);
    }

    return (
        <div>
            <h1>Search for Gif</h1>
            <input type='text' id='input' onChange={(event) => { searchTerm.setTerm(event.target.value) }} />
            <button onClick={handleSearch}>search</button>
            <br />
            <div>
                {(searchedGifs().data !== undefined) ?
                    (searchedGifs().data.map((trendyGif: any) => <GiphyComponent gif={trendyGif} />))
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