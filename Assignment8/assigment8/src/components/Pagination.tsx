import { observer } from "mobx-react";
import PaginationData from "./PaginationData";

const Pagination = (props: {paginationData: PaginationData}) => {

    return (
        <div>
            <button onClick={props.paginationData.decreaseOffset}>previous</button>
            <input type='number' onChange={(event) => { props.paginationData.setPage(parseInt(event.target.value)) }} value={props.paginationData.pageNumber} />
            <span>of {props.paginationData.pageLimit}</span>
            <button onClick={props.paginationData.increaseOffset}>next</button>
        </div>
    );

}

export default observer(Pagination);