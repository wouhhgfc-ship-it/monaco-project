import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import requestlogger from "./middle.ts";
dotenv.config();

const app = express();
app.use(express.json)
const PORT: number = Number(process.env.PORT) || 3000;
app.use(requestlogger)

app.get('/', (req: Request, res: Response) => {


    res.send('Welcome to MONACO server!');

});
app.get('/date', (req: Request, res: Response) => {
    res.send("today's Date : " + new Date)

});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});