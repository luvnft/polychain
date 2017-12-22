import { Action } from 'redux';

import { Player } from '../state';
import { ADD_PLAYER, START_GAME } from './actionTypes';

export interface StartGameAction extends Action  {
  id : number;
}

export interface AddPlayerAction extends Action  {
  player : Player
}

export function startGame(id:number):StartGameAction{
    return {type:START_GAME, id};
}

export function addPlayer(player:Player):AddPlayerAction{
  return {type:ADD_PLAYER,player};
}