export interface Player {
    name: string;
    id: number;
}

export type Game = {
    id: number;
}

export type State = {
    game: Game,
    players: Array<Player>;
};
