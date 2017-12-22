import * as React from 'react';

export interface GameProps{
    id: number;
    startGame?: (number)=>void;
}

export function Game({id,startGame}:GameProps){
    return (
        <div>
            <div>Game {id}</div>
            <button onClick={()=>startGame(10)}>Start</button>
        </div>
    );
}

