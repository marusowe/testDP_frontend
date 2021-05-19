import axios from "axios";

const API_ADDRESS = process.env.REACT_APP_API_ADDRESS

const apiClient = axios.create({
  baseURL: API_ADDRESS,
});

apiClient.defaults.withCredentials = true;

apiClient.interceptors.response.use((response) =>
  response,
  async (error) => {
    return Promise.reject(error.response);
  },
);

const { get, post, delete: destroy } = apiClient;
export { get, post, destroy };