const ApiController = require("../controller/apiController");
const FuncionarioController = require("../controller/funcionarioController");
const apiController = new ApiController();
const funcionarioController = new FuncionarioController();

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
    const nome = request.query.nome;
    const cpf = request.query.cpf;
    const estadoCivil = request.estadoCivil;

    const result = apiController.verificarNome(nome);
    return response.json(result);
});

app.get("/verificar-jogador", function (request, response) {
    const nome = request.query.nome;
    const estadoCivil = request.query.estadoCivil;
    const funcao = request.query.funcao;


    const result = apiController.verificarJogador(nome, estadoCivil, funcao);
    return response.json(result);
});

app.get("/validar-candidato", function (request, response) {
    const expJava = request.query.expJava;
    const expNode = request.query.expNode; clear
    const expBancoDeDados = request.query.expBancoDeDados;


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


app.get("/manipular-primeiro-array", function (request, response) {
    const body = request.body;

    const result = apiController.manipularArray(body);
    return response.json(result);
});

app.get("/validar-numeros", function (request, response) {
    const body = request.body;

    const result = apiController.validarNumeros(body);
    return response.json(result);
});


app.get("/validar-idade-pessoas", function (request, response) {
    const body = request.body;

    const result = apiController.validaIdadePessoa(body);
    return response.json(result);
});

app.get("/validar-pessoas", function (request, response) {
    const body = request.body;

    const result = apiController.validaPessoa(body);
    return response.json(result);
});

app.get("/validar-marcas", function (request, response) {
    const body = request.body;

    const result = apiController.validaMarca(body);
    return response.json(result);
});


app.get("/incluir-carro-novo", function (request, response) {
    const body = request.body;

    const result = apiController.incluirNovoObjetoCarro(body);
    return response.json(result);
});

app.get("/agrupar-carros", function (request, response) {
    const body = request.body;

    const result = apiController.agruparCarros(body);
    return response.json(result);
});

app.get("/consultar-cep", async function (request, response) {
    const result = await apiController.consultarCep();
    return response.json(result);
});

app.get("/consultar-cep2/:cep", async function (resquest, response) {
    const cep = Number(resquest.params.cep);
    const result = await apiController.consultarCep2(cep);
    return response.json(result);
});

app.get("/verificarPessoaIdade", function (request, response) {
    const body = request.body;

    const result = apiController.verificarPessoaIdade(body);
    return response.json(result);
});

app.get("/verificarCidadeIdade", async function (request, response) {
    const body = request.body;

    const result = await apiController.verificarPessoaIdade(body);
    return response.json(result);
});

app.get("/verificarUf", async function (request, response) {
    const body = request.body;

    const result = await apiController.verificarUf(body);
    return response.json(result);
});

app.get("/consultarEstado", async function (request, response) {
    const result = await apiController.consultarEstado();
    return response.json(result);
});


app.get("/consultarIdEstados/:id", async function (request, response) {
    const id =  Number(request.params.id);   
    const result = await apiController.consultarIdEstados(id);
    return response.json(result);
});

app.get("/consultaSiglaEstado", async function (request, response) {
    const sigla = request.query.sigla;
    
    const result = await apiController.consultaSiglaEstado(sigla);
    return response.json(result);
});

app.get("/consultaNomeEstado", async function (request, response) {
    const nome = request.query.nome;
    
    const result = await apiController.consultaNomeEstado(nome);
    return response.json(result);
});

app.get("/lista-funcionario", async function (request, response) {
    
    const result = await funcionarioController.listarFuncionario();
    return response.json(result);
});

app.get("/consultarIdFuncionario/:id", async function (request, response) {
    const id =  Number(request.params.id);   
    const result = await funcionarioController.consultarIdEstados(id);
    return response.json(result);
});


module.exports = app;