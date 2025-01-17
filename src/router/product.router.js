import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from './../controller/product.controller';

import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/product', authMiddleware, index);
app.post('/product', authMiddleware, save);
app.get('/product/:productId', authMiddleware, edit);
app.put('/product/:productId', authMiddleware, update);
app.delete('/product/:productId', authMiddleware, remove);

export default app;