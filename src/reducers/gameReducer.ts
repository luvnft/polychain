import * as actionTypes from '../actions/actionTypes';
import { StartGameAction } from '../actions/gameActions';
import { Game } from '../state';



export default function(game:Game={id:null},action:StartGameAction):Game{
    switch(action.type){
        case actionTypes.START_GAME:{
            return {id:action.id};
        } 
        default:
            return game;
    }
}
