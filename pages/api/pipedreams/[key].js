import { createInvoice, getApiKeys } from "../../../services/pipedream.service";

const handler = async (req, res) => {
  const { key, dateRange } = req.query;
  if (req.method === "GET") {
    const pipedreamResponse = await getApiKeys(key);
    if (pipedreamResponse.status === 200) {
      const { data } = pipedreamResponse;
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ error: "Internal Server Error" });
    }
  } else {
    const response = await createInvoice(key, dateRange);
    if (response.status === 200) {
      const { data } = response;
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ error: "Internal Server Error" });
    }
  }
};

export default handler;
