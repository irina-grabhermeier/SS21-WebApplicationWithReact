import { observer, useLocalObservable } from "mobx-react-lite";
import GiphyComponent from './GiphyComponent';
import Store from './Store';
import PaginationData from './PaginationData';
import Pagination from "./Pagination";

const TrendyPage = (props: { store: Store }) => {

    const createPaginationData = (): PaginationData => {
        return new PaginationData();
    }

    const paginationData = useLocalObservable(createPaginationData);

    const trendyGifs = (): any => {
        return props.store.trendyGifs;
    }

    const prevFuncPagination = () => {
        paginationData.decreaseOffset();
        props.store.loadTrendy(paginationData.offset);
    }

    const nextFuncPagination = () => {
        paginationData.increaseOffset();
        props.store.loadTrendy(paginationData.offset);
    }

    const setPagePagination = (inputNumber: number) => {
        paginationData.setPage(inputNumber);
        props.store.loadTrendy(paginationData.offset);
    }


    return (
        <div>
            <h1>Trendy Gifs</h1>
            <div>
                {(trendyGifs().data !== undefined) ?
                    (trendyGifs().data.map((trendyGif: any) => <GiphyComponent gif={trendyGif} />))
                    : <p>loading...</p>
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
    )
}

export default observer(TrendyPage);