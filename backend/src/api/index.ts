import express from 'express';
import { authRouter } from './auth';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);

apiRouter.use('/:path', (req, res) => {
    res.status(404).send({ error: `${req.method} ${req.params['path']} is not implemented` });
});
