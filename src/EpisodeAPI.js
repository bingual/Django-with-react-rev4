import Axios from 'axios';

// Base Axios 설정
const instance = Axios.create({
    baseURL: 'http://api.tvmaze.com',
    timeout: 1000,
});

export default instance;
