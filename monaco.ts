import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to MONACO server!');

});
app.get('/date', (req: Request, res: Response) => {
    res.send( "today's Date : "+ new Date)

});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});