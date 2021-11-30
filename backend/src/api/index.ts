import express from "express";

export const apiRouter = express.Router();

apiRouter.use('/:path', (req, res) => {
    res.status(404).send({ error: `${req.method} ${req.params["path"]} is not implemented` });
});