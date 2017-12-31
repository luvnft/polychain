import * as React from 'react';
import { shallow } from "enzyme";
import {Game,GameProps} from './Game';
import * as sinon from 'sinon';


describe('<Game/> Component',()=>{

    it('renders game id',()=>{
        let startGame = sinon.spy();
        let props = {id:1,startGame:startGame};
        const wrapper = shallow(<Game {...props}/>);
        expect(wrapper.childAt(0).text()).toContain(props.id);
    });

    it('renders start game button',()=>{
        let startGame = sinon.spy();
        let props = {id:1,startGame:startGame};
        const wrapper = shallow(<Game {...props}/>);
        expect(wrapper.childAt(1).name()).toBe('button');
    });

    it('click handler is called',()=>{
        let startGame = sinon.spy();
        let props = {id:1,startGame:startGame};
        const wrapper = shallow(<Game {...props}/>);
        wrapper.find('button').simulate('click');
        expect(startGame.called).toBeTruthy();
    });

});