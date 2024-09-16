import React from 'react';
import PlayerHand from './PlayerHand';
import GameControls from './GameControls';
import GameStatus from './GameStatus';

const GameBoard: React.FC = () => {
    return (
        <div className="game-board">
            <GameStatus />
            <div className="player-area">
                <PlayerHand playerId='player1' />
                // add playerhand components here
            </div>
            <GameControls />
        </div>
    );
};

export default GameBoard;
