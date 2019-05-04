import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
});

const PORT = process.env.PORT || 30000;

app.listen(PORT, () => {
     console.log(`Server Listen in http://localhost:${PORT}`);
})