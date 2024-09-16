import React from "react";

const GameStatus: React.FC = () => {
    // mock game status data
    const currentTurn = 'Player 1';
    const scores = {player1: 10, player2: 15};

    return (
        <div className="game-status">
            <p>Current Turn: {currentTurn}</p>
            <p>Scores: {JSON.stringify(scores)}</p>
        </div>
    );
};

export default GameStatus;
