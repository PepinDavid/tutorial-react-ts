import React, { ReactElement } from 'react';
import './square.css';

function Square({value, onSquareClick}: {value: String | null, onSquareClick: any}): ReactElement {
    return (
        <button className="Square" onClick={onSquareClick}>{value}</button>
    )
}

export default Square;
