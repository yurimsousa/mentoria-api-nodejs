const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/soma/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);

    const soma = num1 + num2;

    return response.json(soma);
});

app.get("/sub/:num3/:num4", function (resquest, response){
    const num3 = Number(resquest.params.num3);
    const num4 = Number(resquest.params.num4);

    const sub = num3 - num4;
   
    return response.json(sub);
});

module.exports = app;