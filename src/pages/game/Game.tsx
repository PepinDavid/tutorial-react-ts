import React, { ReactElement } from 'react';
import './Game.scss';

import GameContainer from '../../containers/game/game'

function Game(): ReactElement {
    return (
        <>
            <div>
                <h1>Game</h1>
            </div>
            <div>
                <GameContainer/>
            </div>
        </>
    )
}

export default Game;