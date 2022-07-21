import axios from "axios";

const PIPEDREAM_BASE_URL = process.env.NEXT_PUBLIC_PIPEDREAM_API_URL;

export const getApiKeys = async (key) => {
  try {
    const response = await axios.get(`${PIPEDREAM_BASE_URL}?key=${key}`);
    return response;
  } catch (err) {
    return err.response;
  }
};
