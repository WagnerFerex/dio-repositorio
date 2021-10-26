import express from 'express';
import { usersRouter } from './routes/users.routes';
import { statusRouter } from './routes/status.routes';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRouter);
app.use(statusRouter);


app.listen(3000, () => { console.log('Aplicação executando na porta 3000!') });