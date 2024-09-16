import React from "react";

interface PlayerHandProps {
    playerId: string;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ playerId }) => {
    // mock player hand
    const cards = ['Card 1', 'Card 2'];

    return (
        <div className="player-hand">
            <h3>Player {playerId}</h3>
            <ul>{ cards.map((card,index)=> (
                <li key={index}>{card}</li>
            ))}
            </ul>
        </div>
    );
};

export default PlayerHand;
