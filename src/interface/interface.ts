import { MouseEventHandler } from "react"

export interface ITictactoeContainer {
    xIsNext: Boolean;
    winner: String | null;
    squaresState: (String | null)[];
    linesWinning: (number | null)[];
    onPlay: Function;
}

export interface ISquareButtonComponent {
    key: number;
    value: String | null;
    color: String;
    onSquareClick: MouseEventHandler<HTMLButtonElement>;
}