import axios from "axios";

const url = "https://memories-project-na.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatePosts = (id, updatePosts) =>
  axios.patch(`${url}/${id}`, updatePosts);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
