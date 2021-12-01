import express from 'express';
import path from 'path';
import { apiRouter } from './api';

const PORT = process.env.PORT ?? 4000;

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.use(express.static(path.resolve('frontend')));

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
