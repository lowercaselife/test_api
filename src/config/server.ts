import http from 'http';
import express from 'express';
import './config/logging';
import { loggingHandler } from '../middleware/loggingHandler';
export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
    logging.info()
    logging.log('----------------------------------------');
    logging.log('Initializing API');
    logging.log('----------------------------------------');
    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.log('----------------------------------------');
    logging.log('Logging & Configuration');
    logging.log('----------------------------------------');
    application.use(loggingHandler);
    application.use(corsHandler);
}