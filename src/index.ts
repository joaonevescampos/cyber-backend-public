import express, { Express, Request, Response } from "express";
import swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import * as path from 'path';

const swaggerDocumentPath = path.join(__dirname, '..', 'docs/openapi.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerDocumentPath, 'utf8'));

import { PORT } from "./secrets";
import rootRouter from "./routes/index";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`app working on port ${PORT}`);
});
