import axios from "axios";

const instance = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export default instance;