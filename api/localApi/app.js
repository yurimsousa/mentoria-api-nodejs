const express = require("express");
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const ApiController = require("../controller/apiController");
const apiController = new ApiController();

app.get("/soma/:num1/:num2", function (request, response) {
    const num1 = Number(request.params.num1);
    const num2 = Number(request.params.num2);

    const soma = num1 + num2;

    return response.json(soma);
});

app.get("/sub/:num1/:num2", function (resquest, response){
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);

    const sub = num1 - num2;
   
    return response.json(sub);
});

app.get("/mult/:num1/:num2", function (resquest, response){
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);

    const mult = num1 * num2;
   
    return response.json(mult);
});

app.get("/div/:num1/:num2", function (resquest, response){
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);

    const mult = num1 / num2;
   
    return response.json(mult);
});

app.get("/media/:num1/:num2/:num3/:num4/:num5", function (resquest, response){
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);
    const num3 = Number(resquest.params.num3);
    const num4 = Number(resquest.params.num4);
    const num5 = Number(resquest.params.num5);

    const result = apiController.calcularMedia(num1,num2,num3,num4,num5);
   
    return response.json(result);
});

module.exports = app;