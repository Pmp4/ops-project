import axios from "axios";
import { BASE_URL } from 'common/value';

const instance = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;