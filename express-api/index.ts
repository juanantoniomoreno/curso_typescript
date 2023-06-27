import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(401).json({
    ok: false,
    msg: "no hay token",
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
