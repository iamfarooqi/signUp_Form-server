const bodyParser = require("body-parser")
var express = require("express")
const morgan = require ("morgan")
const cors = require ("cors")

PORT = process.env.PORT || 5000;

let users
var express = require("express");

var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
})



server.post("/signup", function (req, res, next)) {
    console.log("running" + JSON.stringify(req.body));
    users.push(JSON.stringify(req.body));
    res.send(JSON.stringify(users));
    res.send("sign up success" + JSON.stringify(req.body))
}




server.post("/signup", function (req, res, next)) {

let email = JSON.stringify(req.body.email);
let password = JSON.stringify(req.body.password);

    for (let i = 0; i < users.length; i++)

        if (user[i].email === email && user[i].password === password) {
                console.log(res.send("login success"));

     }  else {
                console.log(res.send("email Or Password Incorrect"))




    server.listen(3000, () => {
    console.log("server is running on port 3000");
 })