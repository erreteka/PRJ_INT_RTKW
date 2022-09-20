
const express = require("express");

const app = express();

const port = 3000;

const filmRoute = require("./src/routes/filmRoute");

const filmslistRoute = require("./src/routes/filmslistRoute");

const filmsavaliaRoute = require("./src/routes/filmsavaliaRoute");

const methodOverride = require("method-override");

 const session = require("express-session");
 const cookieParser = require("cookie-parser");
 const indexRoute = require("./src/routes/indexRoute");
 const authRoute = require("./src/routes/authRoute");




app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.set("views", __dirname + "/src/views");

app.use(methodOverride("_method"));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: "senha"}));


app.use("/film", filmRoute);
app.use("/filmslist", filmslistRoute);
app.use("/filmsavalia", filmsavaliaRoute);

 
app.use("/", indexRoute);
app.use("/", authRoute);






app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});


