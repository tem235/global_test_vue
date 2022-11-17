import express from 'express';
import { Request, Response } from 'express';
import path from "path";

const app = express();
const port = 3000

app.use(express.static(__dirname + '/spa'));

app.get('/*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '/spa/index.html')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

