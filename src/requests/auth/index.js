export const authenticateUser = (token) => {
    localStorage.setItem('token', token)
}

export const dataUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const isUserAuthenticated = () => {
    return localStorage.getItem('token') !== null
}

export const deauthenticateUser= () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}


export const getToken = () => {
    return localStorage.getItem('token')
}


export const getUser = () => {
    return localStorage.getItem('user').replace(/['"]+/g, '') 
}
