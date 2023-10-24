import axios from './axios';

const AuthService = {
    login(data){
        return axios.post('/auth/login',data)
    },
    register(user){
        return axios.post('/users',{user})
    },
    currentUser(){
        return axios.get('/user')
    }
}

export default AuthService