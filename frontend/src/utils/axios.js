import axios from "axios";

const instance = axios.create({

    baseURL: "http://localhost:8080/",
    headers: {
        common: {
            'Authorization': 'Bearer ' + localStorage.getItem('CognitoIdentityServiceProvider.4hu5e747hsoa3djebroq73lh7d.ringodev.idToken')
        }
    }
});

export default instance;
