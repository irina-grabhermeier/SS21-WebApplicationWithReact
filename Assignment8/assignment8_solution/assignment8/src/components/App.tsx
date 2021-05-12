import React, { useState } from 'react';
import Navigation from './Navigation';
import Searching from './Searching';
import Trending from './Trending';

export default function App(): JSX.Element {
    const [view, setView] = useState<'trending' | 'searching'>('trending');

    return (
        <>
            <Navigation onItemClick={setView} />
            {view === 'trending' && <Trending />}
            {view === 'searching' && <Searching />}
        </>
    );
}
