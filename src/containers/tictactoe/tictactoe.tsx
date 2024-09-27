import React, {ReactElement} from 'react';
import './tictactoe.css';

import Square from '../../components/square/square';

function Tictactoe({xIsNext, squaresState, onPlay}: {xIsNext: Boolean, squaresState: (String | null)[], onPlay: any}): ReactElement {
    const winner = calculateWinner(squaresState);
    let status = winner ? `${winner} a gagné` : `Prochain tour : ${xIsNext ? 'X' : 'O'}`;

    function clickOnSquare(index: number): void {
        if (winner || squaresState[index])
            return;
        console.log(squaresState)
        const nextSquares = squaresState.slice();

        nextSquares[index] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const squares = Array
    .from({length: 9})
    .map((_, index) => <Square key={index} value={squaresState[index]} onSquareClick={() => clickOnSquare(index)}/>);

    return (
        <div className="Tictactoe">
            <div className="status">{status}</div>
            <div className="board-row">
                {squares.splice(0, 3)}
            </div>

            <div className="board-row">
                {squares.splice(0, 3)}
            </div>
            
            <div className="board-row">
                {squares.splice(0, 3)}
            </div>
        </div>
    );
}

function calculateWinner(squares: (String | null)[]): String | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
    
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }
    
    return null;
}

export default Tictactoe;
