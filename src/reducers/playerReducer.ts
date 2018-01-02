import * as actionTypes from "../actions/actionTypes";
import { AddPlayerAction } from "../actions/gameActions";
import { Player } from "../state";

export interface PlayerState {
    players: Player[];
}

export default function(state: PlayerState= {players: new Array<Player>()}, action: AddPlayerAction): PlayerState {
    switch (action.type) {
        case actionTypes.ADD_PLAYER:
            return {players : [action.player, ...state.players]};
        default:
            return state;
    }
}
