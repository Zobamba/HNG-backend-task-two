import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
const { Pool } = require('pg');
 
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

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
