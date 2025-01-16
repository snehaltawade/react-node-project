import express from "express";

const app = express();

app.use(express.json());
const port = 8000;
app.get("/", (req, res) => {
  res.semd("default get path");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
