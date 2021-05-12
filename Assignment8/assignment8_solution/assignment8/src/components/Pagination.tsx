import React, {ChangeEvent} from 'react';

type Props = {
    maxPage: number;
    onPageChange: (page: number) => void;
    page: number;
}

export default function Pagination({maxPage, onPageChange, page}: Props): JSX.Element {
    function handlePageChange(page: number): void {
        if (page <= 1) {
            onPageChange(1);
        } else if (page >= maxPage) {
            onPageChange(maxPage);
        } else {
            onPageChange(page);
        }
    }

    return (
        <div>
            <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>Previous</button>
            <input
                type="number"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handlePageChange(parseInt(event.currentTarget.value))}
                value={page}
            />
            of {maxPage}
            <button disabled={page >= maxPage} onClick={() => handlePageChange(page + 1)}>Next</button>
        </div>
    );
}