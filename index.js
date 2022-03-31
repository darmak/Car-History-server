import express from 'express';
import cors from 'cors';
import path from 'path';
import router from './routes/index.js';
import bodyParser from 'body-parser';
import process from 'process';
import { sequelize } from './models/index.js';
import dotenv from 'dotenv';
import checkPermissionMiddleware from './middlewares/permissionMiddleware.js';
import authMiddleware from './middlewares/authMiddleware.js';

dotenv.config();
const __dirname = path.resolve();
const _PORT = process.env.PORT || 5000;
const app = express();

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(_PORT, () => {
      console.log('Server has been started on ' + _PORT + ' port');
    });
  } catch (e) {
    console.error(e);
  }
}

app.use(
  cors({
    origin: 'http://localhost:3000',
    preflightContinue: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
);

app.use(authMiddleware);
app.use(checkPermissionMiddleware);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.get('/', (req, res) => {
  res.send('is working...!!!!');
});

start();
