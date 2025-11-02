const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const proxyRoute = require('./routes/proxy.route');
const config = require('./config/config');

const app = express();
const port = config.port || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/proxy', proxyRoute);

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
