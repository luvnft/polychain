import { addPlayer } from './gameActions';
import { ADD_PLAYER } from './actionTypes';

describe("Game Actions",()=>{
    it("Create start game action",()=>{
        let player ={id:1,name:'test player'};
        let action  = addPlayer(player);
        expect(action).toBeDefined();
        expect(action.type).toBe(ADD_PLAYER);
        expect(action.player).toBe(player);
    });
});