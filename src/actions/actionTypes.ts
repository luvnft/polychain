import { AddPlayerAction, StartGameAction } from "./gameActions";

export const START_GAME = "START_GAME";
export type START_GAME = typeof START_GAME;

export const ADD_PLAYER = "ADD_PLAYER";
export type ADD_PLAYER = typeof ADD_PLAYER;

export type RootAction = StartGameAction | AddPlayerAction;
