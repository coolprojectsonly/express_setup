import express from "express";

const app = express();

const router = express.Router();

const port = 3000;

router.get("/", (req, res) => {
  res.send(`<h1>HomePage</h1>`);
});

router.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});

router.get("/service", (req, res) => {
  res.send(`<h1>Service Page</h1>`);
});

router.get("/logout", (req, res) => {
  res.send(`<h1>Logout Page</h1>`);
});

app.use("/", router);

app.listen(port, () => console.log(`Listening port is ${port}`));
