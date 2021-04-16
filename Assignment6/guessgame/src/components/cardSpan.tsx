import React from 'react';
import styled from 'styled-components';
import { Suit } from './card';

type props = {
    content: string,
    isLeft: boolean,
    suit: Suit | undefined,
}

const CardSpan = ({ content, isLeft, suit }: props) => {

    const CardSpan = styled.span`
    color: ${(suit === 'Clubs' || suit === 'Spades') ? 'black' : 'red'};
    font-size: large;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
    align-self: ${isLeft ? 'flex-start' : 'flex-end'};
`;

    return (
        <CardSpan>
            {content}
        </CardSpan>
    );
}

export default CardSpan;