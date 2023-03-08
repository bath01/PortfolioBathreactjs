const express = require("express");
const cors = require("cors");
const app = express();

const port = 3001;

const mysql = require("mysql2");
const bodyParser = require("body-parser");
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Portfolio",
  port: 8889,
});
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection.connect((error) => {
  if (error) console.error(error);
  else console.log("Connexion à la base de données réussie.");
});

//Pour le projet la creation d'un nouveau
app.post("/usersCreate", (req, res) => {
  let query = "INSERT INTO users SET ?";
  console.log(req.body);
  let donnee = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  // eslint-disable-next-line no-unused-vars
  connection.query(query, donnee, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "User bien créé" });
    }
  });
});

// lecture de tout les users

app.get("/users", (req, res) => {
  let query = "SELECT * FROM users";
  console.log(req.body);

  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}.`);
});
