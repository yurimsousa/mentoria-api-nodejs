const ApiController = require("../controller/apiController");
const apiController = new ApiController();

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

app.get("/sub/:num1/:num2", function (resquest, response) {
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);

    const sub = num1 - num2;

    return response.json(sub);
});

app.get("/mult/:num1/:num2", function (resquest, response) {
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);

    const mult = num1 * num2;

    return response.json(mult);
});

app.get("/div/:num1/:num2", function (resquest, response) {
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);

    const mult = num1 / num2;

    return response.json(mult);
});


app.get("/media/:num1/:num2/:num3/:num4/:num5", function (resquest, response) {
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);
    const num3 = Number(resquest.params.num3);
    const num4 = Number(resquest.params.num4);
    const num5 = Number(resquest.params.num5);

    const result = apiController.calcularMedia(num1, num2, num3, num4, num5);

    return response.json(result);
});

app.get("/aluno/:num1/:num2/:num3/:num4/:num5", function (resquest, response) {
    const num1 = Number(resquest.params.num1);
    const num2 = Number(resquest.params.num2);
    const num3 = Number(resquest.params.num3);
    const num4 = Number(resquest.params.num4);
    const num5 = Number(resquest.params.num5);

    const result = apiController.calcularMediaAluno(num1, num2, num3, num4, num5);
    return response.json(result);
});


app.get("/verificar-nome", function (request, response) {
    const nome= request.query.nome;
    const cpf= request.query.cpf;
    const estadoCivil= request.estadoCivil;

    const result = apiController.verificarNome(nome);
    return response.json(result);
});

app.get("/verificar-jogador", function (request, response) {
    const nome= request.query.nome;
    const estadoCivil= request.query.estadoCivil;
    const funcao= request.query.funcao;


    const result = apiController.verificarJogador(nome, estadoCivil, funcao);
    return response.json(result);
});

app.get("/validar-candidato", function (request, response) {
    const expJava= request.query.expJava;
    const expNode= request.query.expNode;
    const expBancoDeDados= request.query.expBancoDeDados;


    const result = apiController.verificarCandidado(expJava, expNode, expBancoDeDados);
    return response.json(result);
});

app.get("/calculadora", function (request, response) {
    const acao = request.headers.acao;
    const num1 = request.query.num1;
    const num2 = request.query.num2;

    const result = apiController.calcular(acao, num1, num2);
    return response.json(result);
});


module.exports = app;