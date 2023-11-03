import axios from "axios";
// Deployed api url 
axios.defaults.baseURL = 'https://drf-moments-3bf5a8310302.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();