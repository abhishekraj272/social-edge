import axios from "axios";
import { API_BASE_URL } from "../constants";

export const getPosts = async () => {
  const url = new URL("get", API_BASE_URL);
  const resp = await axios.get(url);
  return resp;
};

export const submitPost = async (data, username) => {
  const url = new URL("post", API_BASE_URL);
  const resp = axios.post(url, { ...data, username });
  return resp;
};

export const votePost = async (postId, type) => {
  const url = new URL("vote", API_BASE_URL);
  url.searchParams.set("postId", postId);
  url.searchParams.set("type", type);
  return axios.get(url);
};
