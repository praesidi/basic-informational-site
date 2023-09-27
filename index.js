import express from "express";

const app = express();
const port = "8080";

app.get(/^\/(|index\.html)$/, (req, res) => {
  res.sendFile("index.html", { root: "./pages/" });
});

app.get("/about.html", (req, res) => {
  res.sendFile("about.html", { root: "./pages/" });
});

app.get("/contact-me.html", (req, res) => {
  res.sendFile("contact-me.html", { root: "./pages/" });
});

app.get("*", (req, res) => {
  res.sendFile("404.html", { root: "./pages/" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
