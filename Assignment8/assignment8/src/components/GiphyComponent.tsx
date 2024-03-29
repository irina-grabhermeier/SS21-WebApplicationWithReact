/**
 * https://github.com/christopher-hague/mini-giphy/blob/master/src/components/GiphyListItem.js
 */

const GiphyComponent = (props: { gif: any }) => {
    return (
        <div className="ui segment">
            <img src={props.gif.images.fixed_height.url}></img>
        </div>
    )
}

export default GiphyComponent;