import React from 'react';
import { Gif } from '../services/GiphyRequester';

type Props = {
    gifs: Array<Gif>,
};

export default function Gifs({gifs}: Props): JSX.Element {
    return (
        <ul>
            {gifs.map(({id, title}) => (<li key={id}>{title}</li>))}
        </ul>
    );
}