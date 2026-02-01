
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


const db = new pg.Pool({
    connectionString: process.env.DB_CONN_STRING,
})


app.get('/', (req, res) => {
    res.send('Hello!');
    console.log("the root has been requested!")
})


//  making an async function as the endpoint
// This logs the table to the console
app.get("/messages", async function (request, response) {
    const data = await db.query("SELECT * FROM messages");
    const messages = data.rows
    res.status(200).json(messages)
    // response.json(messages.rows);
});

app.post("/messages", async function (request, response) {
    const messages = await db.query("SELECT * FROM messages WHERE id = 1");
    response.json(messages.rows);
})


// making a listen port so I can see what's happening
const PORT = 4242
app.listen(PORT, () => {
    console.log("something listens at http://localhost:"+String(PORT));
})