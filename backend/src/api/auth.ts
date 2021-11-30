import express from "express";
import { createHash, createHmac } from 'crypto';

export const authRouter = express.Router();

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
        const dataCheckString = Object.entries(data).sort().map(([name, value]) => `${name}=${value}`).join('\n');
        const computedHash = createHmac('sha256', secret).update(dataCheckString).digest('hex');
        if (computedHash !== hash) {
            res.status(403).send({error: 'authorization failed'});
            return;
        }
    } catch (e) {
        const error = e instanceof Error ? e.message : 'unknown error';
        res.status(500).send({ error });
        return;
    }
    res.status(200).send(true);
});