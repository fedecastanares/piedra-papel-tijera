import axios from 'axios';

import {authenticateUser, dataUser} from './auth';

export const signUpRequest = async (name, email, password) => {
    try {
        var data = JSON.stringify({"name": name, "email": email,"password" : password});
        const response = await axios.post(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/register`, data, 
        {headers: {'Content-Type': 'application/json'}})
        authenticateUser(response.data.user.token);
        dataUser(response.data.user.name);
        return true
    } catch (error) {
       return false
    }
}