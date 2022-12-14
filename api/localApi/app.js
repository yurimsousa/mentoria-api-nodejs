const express  = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get("/teste",function(request,respons){
    return respons.json("hello word")
});
module.exports = app;