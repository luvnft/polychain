// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
// tslint:disable-next-line:no-implicit-dependencies
import * as sinon from "sinon";
import {Game, GameProps} from "./Game";

describe("<Game/> Component", () => {

    it("renders game id", () => {
        const startGame = sinon.spy();
        const props = {id: 1, startGame};
        const wrapper = shallow(<Game {...props}/>);
        expect(wrapper.childAt(0).text()).toContain(props.id);
    });

    it("renders start game button", () => {
        const startGame = sinon.spy();
        const props = {id: 1, startGame};
        const wrapper = shallow(<Game {...props}/>);
        expect(wrapper.childAt(1).name()).toBe("button");
    });

    it("click handler is called", () => {
        const startGame = sinon.spy();
        const props = {id: 1, startGame};
        const wrapper = shallow(<Game {...props}/>);
        wrapper.find("button").simulate("click");
        expect(startGame.called).toBeTruthy();
    });

});
