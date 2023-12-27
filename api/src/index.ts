import express from "express";
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", async (_req, res) => {
  console.log("Connection");
  res.send("data");
});

app.listen(PORT, () => {
  console.log("Now");
});
