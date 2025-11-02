const axios = require('axios');
const config = require('../config/config');

const proxyRequest = async (req, res) => {
  try {
    const targetUrl = config.targetApiUrl + req.originalUrl.replace('/proxy', '');
    const method = req.method;
    const headers = req.headers;
    delete headers.host;
    delete headers.origin;
    const data = req.body;

    const response = await axios({
      method: method,
      url: targetUrl,
      headers: headers,
      data: data,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error('Proxy error:', error);
      res.status(500).json({ message: 'Proxy error' });
    }
  }
};

module.exports = {
  proxyRequest,
};
