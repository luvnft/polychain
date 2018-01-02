export interface Player {
    name: string;
    id: number;
}

export interface Game {
    id: number;
}

export interface State {
    game: Game;
    players: Player[];
}
