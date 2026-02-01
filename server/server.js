
// imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

// setup
const app = express();
app.use(express.json());
app.use(cors);
dotenv.config();

const db = new pg.Pool({ // idk what a Pool is but that pg is postgres (related to SQL)
    connectionString: process.env.DB_CONN // our env var DB_CONN connects w/ idk supa or re-something
})

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.listen('8080', () => {
    console.log('server started on port http://localhost:8080');
})
