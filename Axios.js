import axios from "axios";

const instance = axios.create({
    baseURL:"http://official-joke-api.appspot.com/random_joke"
})

export default axios;