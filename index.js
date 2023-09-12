import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes.js';

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome To HNG Backend Stage Two Task');
});

routes(app);

app.listen(port, () => console.log(`index app listening on port ${port}!`));
