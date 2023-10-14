const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middelware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Shawon", email: "rezoanshawon@gmail.com" },
  { id: 2, name: "Ena", email: "sadiaEna@gmail.com" },
];

app.get("/user", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  const newId = parseInt(req.params.id);
  const newUser = users.find((na) => na.id === newId);
  res.send(newUser);
});

app.post("/user", (req, res) => {
  const addedUser = req.body;
  addedUser.id = users.length + 1;
  users.push(addedUser);
  res.send(addedUser);
});

app.listen(port);
