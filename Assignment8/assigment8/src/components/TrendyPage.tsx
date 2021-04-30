import { storeAnnotation } from 'mobx/dist/internal';
import React from 'react';
import { observer } from "mobx-react-lite";
import GiphyComponent from './GiphyComponent';
import Store from './Store';

const TrendyPage = (props: { store: Store }) => {


    const trendyGifs = (): any => {
        return props.store.trendyGifs;
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
        </div>
    )

}

export default observer(TrendyPage);