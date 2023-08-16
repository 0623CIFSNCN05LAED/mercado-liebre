const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.post("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/login.html"));
});
