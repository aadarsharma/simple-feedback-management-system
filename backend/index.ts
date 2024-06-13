import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { createFeedbackSchema } from './types'; // assuming createFeedbackSchema is a Zod schema
import { Feedback } from './db';

const app = express();


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.post('/feedback', async (req: Request, res: Response) => {
    const createPayload = req.body;
    const parsedPayload = createFeedbackSchema.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs',
        });
        return;
    }

    await Feedback.create({
        name: parsedPayload.data.name,
        feedback: parsedPayload.data.feedback,
    });

    res.status(201).json({
        msg: 'Feedback created successfully',
    });
});

app.get('/feedbacks', async (req: Request, res: Response) => {
    const feedbacks = await Feedback.find({});
    res.status(200).json({
        feedbacks: feedbacks,
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
