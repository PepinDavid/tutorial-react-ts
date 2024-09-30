import React, {ReactElement} from 'react';
import { ITictactoeContainer } from '../../interface/interface';
import './tictactoe.scss';

import Square from '../../components/square/square';

function Tictactoe({xIsNext, squaresState, linesWinning, winner, onPlay}: ITictactoeContainer): ReactElement {
    function clickOnSquare(index: number): void {
        if (winner || squaresState[index])
            return;

        const nextSquares = squaresState.slice();

        nextSquares[index] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const squares = Array
    .from({length: 9})
    .map((_, index) => <Square key={index} color={linesWinning.includes(index) ? "red" : "black"} value={squaresState[index]} onSquareClick={() => clickOnSquare(index)}/>);

    const array = [
        ["1", ...squares.splice(0, 3)],
        ["2", ...squares.splice(0, 3)],
        ["3", ...squares.splice(0, 3)],
        ["", "A", "B", "C"],
    ];

    return (
        <div className="Tictactoe">
            <table>
                <tbody>
                    {
                        array.map((els, index) => {
                            return (
                                <tr key={index}>
                                    {els.map((el, i) => <td className={index === array.length -1 ? "text-center" : ""} key={i}>{el}</td>)}
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tictactoe;
