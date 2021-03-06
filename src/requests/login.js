import axios from 'axios';

import {authenticateUser, dataUser} from './auth';

export const loginRequest = async (email, password) => {
    try {
        var data = JSON.stringify({"email": email,"password" : password});
        const response = await axios.post(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}/login`, data, 
        {headers: {'Content-Type': 'application/json'}})
        authenticateUser(response.data.user.token);
        dataUser(response.data.user.name);
        return true;
    } catch (error) {
        return false;
    }
}
