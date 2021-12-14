import { Router } from 'express';
import { register, login, getUser } from './../controller/user.controller';

const app = Router();

app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth', getUser);

export default app;
