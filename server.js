const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public");

var content = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quos fugiat commodi accusantium adipisci unde accusamus atque nemo neque et dolorum veritatis impedit error nostrum consequatur labore delectus ex itaque quam qui totam magni eos. Impedit sapiente quae consequuntur consequatur. Provident molestias repellendus earum consequatur soluta deserunt ratione debitis vel?","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quos fugiat commodi accusantium adipisci unde accusamus atque nemo neque et dolorum veritatis impedit error nostrum consequatur labore delectus ex itaque quam qui totam magni eos. Impedit sapiente quae consequuntur consequatur. Provident molestias repellendus earum consequatur soluta deserunt ratione debitis vel?"];
var blog = "";
app.get("/",function(req,res) {
    res.render('home',  {content: content});
});

app.get("/add",function(req,res) {
    res.render('add');
});

app.post("/add",function(req,res) {
    res.render('add');
});

app.post("/addContent",function(req,res) {
    blog = req.body.content;
    content.push(blog);
    res.redirect('/');
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});