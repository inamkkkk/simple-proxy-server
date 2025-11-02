const express = require('express');
const proxyController = require('../controllers/proxy.controller');

const router = express.Router();

router.all('/*', proxyController.proxyRequest);

module.exports = router;
