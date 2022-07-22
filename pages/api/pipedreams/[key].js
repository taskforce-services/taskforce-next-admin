import { getApiKeys } from "../../../services/pipedream.service";

const handler = async (req, res) => {
  const { key } = req.query;
  const pipedreamResponse = await getApiKeys(key);
  if (pipedreamResponse.status === 200) {
    const { data } = pipedreamResponse;
    return res.status(200).json(data);
  } else {
    return res.status(400).json({ error: "Internal Server Error" });
  }
};

export default handler;
