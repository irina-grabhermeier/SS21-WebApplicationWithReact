/**
 * https://github.com/christopher-hague/mini-giphy/blob/master/src/components/GiphyListItem.js
 */
import { getByTitle } from '@testing-library/dom';
import React from 'react';

const GiphyComponent = (props: { gif: any }) => {
    return (
        <div className="ui segment">
            <img src={props.gif.images.fixed_height.url}></img>
        </div>
    )
}

export default GiphyComponent;