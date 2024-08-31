import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});


export const postData = async (endpoint: string, data: any, config?: AxiosRequestConfig) => {
  try {
    const response = await apiClient.post(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};


export const getData = async (endpoint: string, config?: AxiosRequestConfig) => {
  try {
    const response = await apiClient.get(endpoint, config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};


export const putData = async (endpoint: string, data: any, config?: AxiosRequestConfig) => {
  try {
    const response = await apiClient.put(endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error(`Error putting data to ${endpoint}:`, error);
    throw error;
  }
};


export const deleteData = async (endpoint: string, config?: AxiosRequestConfig) => {
  try {
    const response = await apiClient.delete(endpoint, config);
    return response.data;
  } catch (error) {
    console.error(`Error deleting data from ${endpoint}:`, error);
    throw error;
  }
};
