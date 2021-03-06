import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {SnackbarProvider} from "notistack";
import Auth from "./Auth";

ReactDOM.render(
    <React.StrictMode>
        <SnackbarProvider
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }} maxSnack={4}>
            <Auth/>

        </SnackbarProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
