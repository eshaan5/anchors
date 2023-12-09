import axios from 'axios';

const API = axios.create({baseURL:"http://localhost:5000/"})

export const getVideos = () =>  API.get("/videos")
export const postVideo = (data) => API.post(`/videos`,data)