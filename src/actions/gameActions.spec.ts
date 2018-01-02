import { ADD_PLAYER } from "./actionTypes";
import { addPlayer } from "./gameActions";

describe("Game Actions", () => {
    it("Create start game action", () => {
        const player = {id: 1, name: "test player"};
        const action  = addPlayer(player);
        expect(action).toBeDefined();
        expect(action.type).toBe(ADD_PLAYER);
        expect(action.player).toBe(player);
    });
});
