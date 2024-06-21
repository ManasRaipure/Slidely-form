import { Router, Request, Response } from 'express';

const submissionsRouter = Router();

let submissions: Array<{ name: string, email: string, phone: string, github: string }> = [];

submissionsRouter.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github } = req.body;
    submissions.push({ name, email, phone, github });
    res.status(201).send('Submission created successfully');
});

submissionsRouter.get('/read', (req: Request, res: Response) => {
    res.json(submissions);
});

export { submissionsRouter };
