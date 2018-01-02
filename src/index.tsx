// tslint:disable-next-line:no-submodule-imports
import "bootstrap/dist/css/bootstrap.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
// tslint:disable-next-line:no-implicit-dependencies
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./app";
import rootReducer from "./reducers";
import { Player, State } from "./state";

// tslint:disable-next-line:no-string-literal
const enhancer = window["devToolsExtension"] ? window["devToolsExtension"]()(createStore) : createStore;
const store = enhancer(rootReducer, {
    game: { id: 1 },
    players: new Array<Player>(),
});

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>,
    document.getElementById("root") as HTMLElement,
);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept("./app", () => {
        const NextApp = require<RequireImport>("./app").default;
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </Provider>,
            document.getElementById("root"),
        );
    });
}
