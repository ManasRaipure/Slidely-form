import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { submissionsRouter } from './routes/submissions';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/submissions', submissionsRouter);

const submissions: any[] = [];

// Endpoint to check if server is running
app.get('/ping', (req: Request, res: Response, next: NextFunction) => {
  res.send('Server is running');
});

// Endpoint to submit data
app.post('/submit', (req: Request, res: Response, next: NextFunction) => {
  const submission = req.body;
  submissions.push(submission);
  res.status(201).json(submission);
});

// Endpoint to read data
app.get('/read', (req: Request, res: Response, next: NextFunction) => {
  res.json(submissions);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
