import axios from 'axios';

import {authenticateUser, dataUser} from './auth';

export const loginRequest = (user, password) => {
    try {
        var data = JSON.stringify({"email": user,"password" : password});
        axios.post(`http://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/login`, data, 
        {headers: {
            'Content-Type': 'application/json'
          }})
          .then(function (response) {
              authenticateUser(response.data.user.token);
              dataUser(response.data.user.name);
          })
          .catch(function (error){
            console.log("contrase;a incorrecta");
          });
    } catch (error) {
        console.log(error);
    }
}
