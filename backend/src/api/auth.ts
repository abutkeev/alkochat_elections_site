import express from 'express';
import cookieParser from 'cookie-parser';
import { createHash, createHmac } from 'crypto';
import { getSession, registerSession } from '../store/sessions';

export const authRouter = express.Router();

authRouter.use(cookieParser());
authRouter.get('/', (req, res) => {
    const data = getSession(req.cookies && req.cookies['session_hash']);
    console.log(data);
    if (!data) {
        res.status(403).send(false);
        return;
    }
    res.status(200).send(data);
});

authRouter.post('/', (req, res) => {
    const botToken = process.env.BOT_TOKEN;
    if (!botToken) {
        res.status(501).send({ error: 'auth is not configured' });
        return;
    }
    try {
        const { hash, ...data } = req.body;

        if (!hash) {
            throw new Error(`invalid body ${JSON.stringify(req.body)}`);
        }
        const secret = createHash('sha256').update(botToken).digest();
        const dataCheckString = Object.entries(data)
            .sort()
            .map(([name, value]) => `${name}=${value}`)
            .join('\n');
        const computedHash = createHmac('sha256', secret).update(dataCheckString).digest('hex');
        if (computedHash !== hash) {
            res.status(403).send({ error: 'authorization failed' });
            return;
        }
        registerSession(hash, data);
        res.cookie('session_hash', hash);
    } catch (e) {
        const error = e instanceof Error ? e.message : 'unknown error';
        res.status(500).send({ error });
        return;
    }
    res.status(200).send(true);
});
