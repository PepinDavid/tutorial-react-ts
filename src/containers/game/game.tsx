import React, { useState } from "react";
import './game.scss';

import Tictactoe from "../tictactoe/tictactoe";

function GameContainer() {
    const [xIsNext, setXIsNext] = useState<Boolean>(true);
    const [history, setHistory] = useState<(String | null)[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const [moves, setMoves] = useState<any[]>([]);
    const [gameMatrice, setGameMatrice] = useState<any[][]>([]);

    const currentSquares = history[currentMove];
    const [winner, linesWinning] = calculateWinner(currentSquares);

    let status = gameStatus(xIsNext, winner, currentSquares);

    function handleOnPlay(nextSquares: (String | null)[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        const historyMove = history.map((_, move) => {
            let description = move > 0 ? `Aller au coup #${move}` : `Revenir au début`;
            let classCss = `btn ${move === 0 ? 'btn-primary' : 'btn-outline-primary'}`;
            
            if (move === currentMove && move > 0)
                description = `Vous êtes au coup #${move}`
            
            
            return (
                <button key={move} className={classCss} onClick={() => jumpTo(move)}>{description}</button>
            );
        });
        
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1);
        setXIsNext(!xIsNext);
        setMoves(moves[0] && moves[0].key > 0 ? historyMove.reverse() : historyMove);
        setGameMatrice([
            nextSquares.slice(0,3),
            nextSquares.slice(3,6),
            nextSquares.slice(6,9),
        ]);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
        setHistory([...history.slice(0, nextMove + 1)]);
    }

    const piecePut = () => {
        const letters = ['A', 'B', 'C'];
        let injected: String[] = [];

        gameMatrice.forEach((els, index) => {
            els.forEach((el, i) => {
                if(el)
                    injected.push(`${el} play at ${letters[i]}:${index + 1}`);
            });
        });

        return injected.map((el, index) => (
            <li key={index}>
                <p key={index}>
                    {el}
                </p>
            </li>
        ));
    }


    function reverseMoves() {
        setMoves([...moves.reverse()]);
    }

    return (
        <div className="Game">
            <div className="row">
                <div className="col-3">
                    <ol>{piecePut()}</ol>
                </div>
                <div className="col-6">
                    <div className="status text-center">
                        <h3>{status}</h3>
                    </div>

                    <Tictactoe xIsNext={xIsNext} squaresState={currentSquares} linesWinning={linesWinning} winner={winner} onPlay={handleOnPlay}/>
                </div>

                <div className="col-3">
                    <div className="row">
                        <button className="btn btn-info" onClick={() => reverseMoves()}>Inverser l'ordre</button>
                    </div>
                    <div className="row">
                        <div className="btn-group-vertical">
                            {moves}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function calculateWinner(squares: (String | null)[]): [String | null, number[]] {
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
            return [squares[a], lines[i]];
    }
    
    return [null, []];
}

function gameStatus(xIsNext: Boolean, winner: String | null, squares: (String | null)[]): String {
    if (winner)
        return `${winner} a gagné`;

    if (!squares.includes(null))
        return 'Partie nulle';

    return `Prochain tour : ${xIsNext ? 'X' : 'O'}`;
}

export default GameContainer;
