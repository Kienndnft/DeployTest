import axios from 'axios';

export const orderbook = async (req, res) => {
  const tokenPair = `FITFI_USDT`;
  const limit = 10;
  const url = `https://api.gateio.ws/api/v4/spot/order_book?currency_pair=${tokenPair}&limit=${limit}`;

  try {
    const response = await axios.get(url, { timeout: 2000 });
    if (!response?.data) throw new Error('Error api');

    res.status(200).send(response?.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
