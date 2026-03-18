import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
}));
app.use(express.json());

app.get('/v1/products', async (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: 'Products' });
});

app.use((req, res, next) => {
  return res.sendStatus(404);
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
