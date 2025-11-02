# Simple Proxy Server

A basic proxy server that forwards requests to another API.

## Usage

1.  Install dependencies: `npm install`
2.  Configure the target API URL in `config/config.js`.
3.  Run the server: `npm start`

## Configuration

Configuration options are in `config/config.js`.

## Endpoints

*   `/proxy/*`:  Forwards requests to the configured target API.
