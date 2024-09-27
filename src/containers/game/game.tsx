import React, { useState } from "react";
import './game.css';

import Tictactoe from "../tictactoe/tictactoe";

function Game() {
    const [xIsNext, setXIsNext] = useState<Boolean>(true);
    const [history, setHistory] = useState<(String | null)[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const currentSquares = history[currentMove];

    function handleOnPlay(nextSquares: (String | null)[]) {
        const nextHistory = [...history.slice(0, currentMove +1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        const description = move > 0 ? `Aller au coup # + ${move}` : `Revenir au début`;
        
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="Game">
            <div className="grid-template">
                <div className="game-board">
                    <Tictactoe xIsNext={xIsNext} squaresState={currentSquares} onPlay={handleOnPlay}/>
                </div>

                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
    )
}

export default Game;
