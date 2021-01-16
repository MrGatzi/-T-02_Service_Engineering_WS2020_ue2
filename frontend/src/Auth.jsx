import Amplify, {Auth} from "aws-amplify";
import {AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";
import * as config from "./aws-exports.json";
import App from "./App";
import React from "react";
import {Router} from "@material-ui/icons";
import {AppBar, Menu, Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

Amplify.configure({
    Auth: {
        region: config.userPoolRegion,
        userPoolId: config.userPoolId,
        userPoolWebClientId: config.userPoolWebClientId,
        identityPoolId: config.identityPoolID,
    },
});


const Main = () => {
    Auth.currentAuthenticatedUser().then(u => {
        console.log(u)
    })
    return (
        <div>
            <AppBar position="static">
                <AmplifySignOut/>
            </AppBar>
            <App/>

        </div>
    );
};

// Wrap your export so that it will require auth to access this page
export default withAuthenticator(Main);
