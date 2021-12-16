import { Router } from 'express';
import { save, found } from './../controller/puerto.controller';

const app = Router();

app.get('/puerto', found);
app.post('/puerto', save);

export default app;
