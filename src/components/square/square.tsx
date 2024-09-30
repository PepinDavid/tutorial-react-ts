import React, { ReactElement } from 'react';
import { ISquareButtonComponent } from '../../interface/interface';
import './square.scss';

function Square({value, onSquareClick, color}: ISquareButtonComponent): ReactElement {
    return (
        <button className={`Square ${color}`} onClick={onSquareClick}>{value}</button>
    )
}

export default Square;
