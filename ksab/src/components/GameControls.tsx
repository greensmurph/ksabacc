import React from "react";

const GameControls: React.FC = () => {
    const handleAction = (action: string) => {
        console.log(`Action: ${action}`);
        // dispatch game action to the state
    };

    return (
        <div className="game-controls">
            <button onClick={() => handleAction('draw')}>Draw</button>
            <button onClick={() => handleAction('play')}>Play</button>
            <button onClick={() => handleAction('pass')}>Pass</button>
        </div>
    );
};

export default GameControls;
