import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { Player, State } from './state'

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = enhancer(rootReducer, {
    game: { id: 1 },
    players: new Array<Player>()
});

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./app', () => {
        console.log('doing a app hot accept')
        const NextApp = require<RequireImport>('./app').default
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        );
    });
}
