import express from 'express';
import path from 'path';

const PORT = process.env.PORT ?? 4000;

const app = express();

app.use(express.static(path.resolve('frontend')));

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
})