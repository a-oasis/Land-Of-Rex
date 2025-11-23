// apiFaqList.jsx
import axios from 'axios';
import { baseUrl } from "../config/url.js";

const getFaqList = async (page = 0, size = 10) => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/posts`, {
      params: {
        page,
        size,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch FAQ list:', error);
    throw error;
  }
};

export default getFaqList;
