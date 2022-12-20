const express  = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get("/soma/:num1/:num2", function(request,response){
    
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);
    const soma = num1+num2;

    return response.json(soma);



});
module.exports = app;