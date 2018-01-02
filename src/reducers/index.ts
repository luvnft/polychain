
import { combineReducers } from "redux";

import { State } from "../state";
import game from "./gameReducer";
import players from "./playerReducer";

const rootReducer =  combineReducers<State>({
    game, players,
});

export default rootReducer;
