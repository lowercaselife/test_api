import http from 'http';
import express from 'express';
import './config/logging';
import e from 'express';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    logging.info()
}