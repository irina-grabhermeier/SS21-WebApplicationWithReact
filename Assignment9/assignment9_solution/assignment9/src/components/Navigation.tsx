import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <Link to="/numbers">Numbers</Link>
            <Link to="/dates">Dates</Link>
            <Link to="/texts">Texts</Link>
        </>
    );
}