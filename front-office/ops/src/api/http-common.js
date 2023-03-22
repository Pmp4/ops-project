import axios from "axios";
import { BASE_URL } from 'common/value';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});

export default instance;