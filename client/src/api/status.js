import axios from 'axios';

export const getStatus = () => {
    return axios.get('/api/status')
}

export const getUsers = () => {
    return axios.get('/api/users');
}

export const getHotels = () => {
    return axios.get('/api/hotels');
}