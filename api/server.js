const express = require("express");
const helmet = require("helmet");

const apiRouter = require("./api-router.js");

const server = express();

console.log("environment", process.env.NODE_ENV);

server.use(helmet());

server.use("/api", apiRouter);

module.exports = server;
