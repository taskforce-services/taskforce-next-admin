import axios from "axios";

const PIPEDREAM_BASE_URL = process.env.NEXT_PUBLIC_PIPEDREAM_API_URL;
const PIPEDREAM_INVOICE_URL = process.env.NEXT_PUBLIC_PIPEDREAM_INVOICE_URL;

export const getApiKeys = async (key) => {
  try {
    const response = await axios.get(`${PIPEDREAM_BASE_URL}?key=${key}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const createInvoice = async (key, dateRange) => {
  try {
    const response = await axios.post(
      `${PIPEDREAM_INVOICE_URL}?key=${key}`,
      dateRange
    );
    return response;
  } catch (err) {
    return err.response;
  }
};
