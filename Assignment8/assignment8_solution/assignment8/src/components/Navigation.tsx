import React from 'react';

type Props = {
    onItemClick: (item: 'trending' | 'searching') => void;
}

export default function Navigation({onItemClick}: Props): JSX.Element {
    return (
        <>
            <button onClick={() => onItemClick('trending')}>Trending GIFs</button>
            <button onClick={() => onItemClick('searching')}>Searching GIFs</button>
        </>
    );
}