import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { orderbook } from './controller/orderbook.js';

//reads the contents of the .env file in the root of your project and loads the variables into process.env
dotenv.config();

const server = express();

server.use(express.json());
server.use(morgan('combined'));

server.use('/index', (req, res) => {
  res.status(200).send('Hello New Deploy');
});

server.use('/gateio', orderbook);

server.listen(3000, () => {
  console.log('Server running...');
});
