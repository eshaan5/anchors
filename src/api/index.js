import axios from 'axios';

const API = axios.create({baseURL:"https://anchors-backend-eshaan5.vercel.app/"})

export const getVideos = () =>  API.get("/videos")
export const postVideo = (data) => API.post(`/videos`,data)
export const sendCallback = (data) => API.post(`/callback`,data)