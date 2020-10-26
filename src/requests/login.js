import axios from 'axios';

import {authenticateUser, dataUser} from './auth';

export const loginRequest = async (user, password) => {
    try {
        var data = JSON.stringify({"email": user,"password" : password});
        const response = await axios.post(`http://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/login`, data, 
        {headers: {'Content-Type': 'application/json'}})
        authenticateUser(response.data.user.token);
        dataUser(response.data.user.name);
    } catch (error) {
        console.log(error);
    }
}
