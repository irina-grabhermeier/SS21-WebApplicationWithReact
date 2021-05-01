import { observer, useLocalObservable } from "mobx-react-lite";
import GiphyComponent from './GiphyComponent';
import Store from './Store';
import PaginationData from './PaginationData';

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
        console.log(paginationData.offset);
        props.store.loadTrendy(paginationData.offset);
    }
    const nextFuncPagination = () => {
        paginationData.increaseOffset();
        console.log(paginationData.offset);
        props.store.loadTrendy(paginationData.offset);
    }

    const setPage = (inputNumber: number) => {

        paginationData.setPage(inputNumber);
        console.log(paginationData.offset);
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
                <button onClick={prevFuncPagination}>previous</button>
                <input type='number' onChange={(event) => { setPage(parseInt(event.target.value)) }} value={paginationData.pageNumber} />
                <span>of {paginationData.pageLimit}</span>
                <button onClick={nextFuncPagination}>next</button>
            </div>
        </div>
    )

}

export default observer(TrendyPage);