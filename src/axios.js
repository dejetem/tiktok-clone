import axios from 'axios';

const instance  = axios.create({
    baseURL: "https://backend-tik.herokuapp.com"
});

export default instance;