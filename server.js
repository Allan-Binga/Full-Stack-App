const express = require("express");
const app = express();
const port = 8080;
const { Client } = require("pg") //Importing the Postgres client

//Connecting our postgres DB
const client = new Client({
  password: "root",
  user: "root",
  host: "postgres"
})

app.use(express.static("public"))

app.get("/employees", async (req, res) => {
  const results = await client
    .query("SELECT * FROM employees")
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error("Query failed")
    })
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(results));
});

(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`Node app running on port http://localhost:${port}`)
  })
})();

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("foo")
  }, 300)
  reject("oopsie")
})

myPromise.then(() => {
  console.log("Hello")
})