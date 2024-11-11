import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,  
});

export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    throw new Error('API request failed');
  }
};
