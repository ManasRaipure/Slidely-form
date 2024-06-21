import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { submissionsRouter } from './routes/submissions';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/submissions', submissionsRouter);

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
