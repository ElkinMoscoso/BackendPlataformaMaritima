import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import CategoryRouter from './router/category.router';
import ProductRouter from './router/product.router';
import UserRouter from './router/user.router';

dotenv.config();
const app = express();

const main = async () => {
  await mongoose.connect(process.env.URL_DB);
  app.use(express.json());
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use('/api', CategoryRouter);
  app.use('/api', ProductRouter);
  app.use('/api', UserRouter);

  app.listen(process.env.PORT, () => {
    console.log(`app listening at port ${process.env.PORT}`);
  });
};

main().catch((err) => console.log(err));
