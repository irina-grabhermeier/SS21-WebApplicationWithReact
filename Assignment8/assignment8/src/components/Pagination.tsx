import { observer } from "mobx-react";

const Pagination = (props: {
    currentPage: number,
    pageLimit: number,
    prevFunc: () => void,
    nextFunc: () => void,
    inputOnChange: (num: number) => void
}
) => {

    return (
        <div>
            <button onClick={props.prevFunc}>previous</button>
            <input type='number' onChange={(event) => props.inputOnChange(parseInt(event.target.value))} value={props.currentPage} />
            <span>of {props.pageLimit}</span>
            <button onClick={props.nextFunc}>next</button>
        </div>
    );

}

export default observer(Pagination);