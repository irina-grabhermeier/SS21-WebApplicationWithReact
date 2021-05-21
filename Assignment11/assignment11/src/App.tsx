import React from 'react';
import * as d3 from 'd3';

const data = [20, 60, 30, 10, 50]

const draw = () => {
    d3.select('#svg').selectAll('path')
        .datum(data)
        .attr('fill', 'transparent')
        .attr('stroke', 'black')
        .attr(
            'd',
            d3.line<number>()
                .x((number, index) => index * 10)
                .y((number) => number)
        );
}

const App = () => {
    return (
        <div>
            <p>Hello World!</p>
            <svg id='svg'>
                <path />
            </svg>
            {draw()}
        </div>
    );
}

export default App;