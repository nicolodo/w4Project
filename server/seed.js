import pg from "pg";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const db = new pg.Pool({
    connectionString: process.env.DB_CONN_STRING,
})

db.query(
    `INSERT INTO messages (msg_name, content) VALUES ('hello there','general kenobi')`
);

// db.query(`SELECT * FROM USERS WHERE id = $1`, [req.body.user_id]);

db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
    "Does anyone else..",
    "love oranges",
]);
db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
    "hot take:",
    "I think oranges suck",
]);

// making a listen port so I can see what's happening
const PORT = 8080
app.listen(PORT, () => {
    console.log("something listens at http://localhost:"+String(PORT));
})

//  making an async function as the endpoint
// This logs the table to the console
app.get("/messages", async function (request, response) {
    const messages = await db.query("SELECT * FROM messages");
    response.json(messages.rows);
});
app.get("/messages", async function (request, response) {
    const messages = await db.query("SELECT * FROM messages WHERE id = 1");
    response.json(messages.rows);
})


