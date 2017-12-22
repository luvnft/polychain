import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { startGame, StartGameAction } from '../actions/gameActions';
import { Game, GameProps } from '../components/Game';
import { State } from '../state';

function mapStateToProps({game}:State):GameProps{
    return {
        id:game.id
    };
}

function mapDispatchToProps(dispatch:Dispatch<StartGameAction>){
    return {
        startGame: (id)=>dispatch(startGame(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);