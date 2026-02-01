
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

app.listen(4242, () => { // open port 4242
    console.log(`Server started on port http://localhost:4242`)
})

//  making an async function as the endpoint
// This logs the table to the console
app.get("/messages", async function (request, response) {
    const data = await db.query("SELECT * FROM messages");
    const messages = data.rows
    res.status(200).json(messages)
    // response.json(messages.rows);
});
app.get("/messages", async function (request, response) {
    const messages = await db.query("SELECT * FROM messages WHERE id = 1");
    response.json(messages.rows);
})

app.get('/', (req, res) => {
    res.send('Hello!');
})
