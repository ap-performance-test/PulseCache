import app from './server';
import config from '../config.json';
import dotenv from 'dotenv';
dotenv.config();

const port = Number(process.env.PORT ?? config.PORT ?? 3011);
app.listen(port, () => {
  console.info(`Express application started on port: ${port}`);
});
