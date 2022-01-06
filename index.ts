import express, { Request, Response } from 'express';
const app = express()
const port = 8080

app.use('/', (_: Request, response: Response) => {
    response.send('GM! WAGMI!');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`)
})
