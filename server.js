var express = require("express");
var db = require("./app/models");
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./app/controllers/burgers_controllers");

app.use(routes);

var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App now listening on port:", PORT);
    });
});
