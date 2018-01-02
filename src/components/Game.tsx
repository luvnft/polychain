import * as React from "react";

export interface GameProps {
    id: number;
    startGame?: (id: number) => void;
}

export function Game({id, startGame}: GameProps) {
    const handler = () => startGame(10);

    return (
        <div>
            <div>Game {id}</div>
            <button className="btn btn-primary" onClick={handler}>Start</button>
        </div>
    );
}
