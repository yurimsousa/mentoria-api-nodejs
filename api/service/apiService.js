const axios = require('axios');

class ApiService {

    calcularMedia(num1, num2, num3, num4, num5) {
        const soma = Number(num1 + num2 + num3 + num4 + num5);
        const media = soma / 5;
        return media;
    }

    calcularMediaAluno(num1, num2, num3, num4, num5) {
        const soma = num1 + num2 + num3 + num4 + num5;
        const med = soma / 5;

        if (med >= 6) {
            return `Media:${med} Parabéns! voce foi aprovado`;
        } else if (med <= 6) {
            return `Media: ${med} Estude mais! você foi Reprovado`;
        }
    }

    verificarNome(nome) {
        const nomeFormatado = nome.toString();
        console.log("nome formatado", nomeFormatado.toLowerCase());
        if (nomeFormatado.toLowerCase() === "clodomir") {
            return "Nome do usuario correto"
        } else {
            return "Nome do usuario incorreto"
        }
    }

    verificarJogador(nome, estadoCivil, funcao) {
        const nomeFormatado = nome.toString();
        const estadoCivilFormatado = estadoCivil.toString();
        const funcaoFormatado = funcao.toString();
        let motivo = "";
        //console.log("nome formatado", nomeFormatado.toLowerCase());
        if (nomeFormatado.toLowerCase() === "neymar" & estadoCivilFormatado.toLowerCase() === "solteiro" & funcaoFormatado.toLowerCase() === "atacante") {
            return "Jogador neymar esta apto"
        } else {
            if (nomeFormatado !== "neymar") {
                motivo += `nome esta errado ${nomeFormatado}, `;
            }
            if (estadoCivilFormatado !== "solteiro") {
                motivo += `estado civil errado ${estadoCivilFormatado}, `;
            }
            if (funcaoFormatado !== "atacante") {
                motivo += `funcao esta errada ${funcaoFormatado}`;
            }
            return {
                message: "jogador nao esta apto",
                motivo: motivo
            };
        }
    }

    verificarCanditado(expJava, expNode, expBancoDeDados) {
        const expjavaformatado = expJava.toString();
        const expNodeFormatado = expNode.toString();
        const expBnacoDeDadosFormatado = expBancoDeDados.toString();
        let motivo = "";
        //console.log("nome formatado", nomeFormatado.toLowerCase());
        if (expjavaformatado.toLowerCase() === "5" && expNodeFormatado.toLowerCase() === "5" && expBnacoDeDadosFormatado.toLowerCase() === "5") {
            return "candidato preencheu os requisitos necessario"
        } else {
            if (expjavaformatado !== "5") {
                motivo += `experiencia menor que 5 em java ${expjavaformatado}, `;
            }
            if (expNodeFormatado !== "5") {
                motivo += `experiencia menor que 5  em Node.Js ${expNodeFormatado}, `;
            }
            if (expBnacoDeDadosFormatado !== "5") {
                motivo += `experiencia menor que 5  em Banco de dados ${expBnacoDeDadosFormatado}`;
            }
            return {
                message: "candidado não preencheu o requisito: ",
                motivo: motivo
            };
        }
    }

    calcular(acao, num1, num2) {
        let result = null;
        switch (acao) {
            case 'somar':
                result = Number(num1) + Number(num2);
                break;
            case 'subtrair':
                result = Number(num1) - Number(num2);
                break;
            case 'multiplicar':
                result = Number(num1) * Number(num2);
                break;
            case 'dividir':
                result = Number(num1) / Number(num2);
                break;

            default:
                result = "informe uma ação valida";
                break;

        }

        return result;
    }

    manipularArray(body) {
        let somaArray = 0;
        for (let contador = 0; contador < body.length; contador++) {
            somaArray += body[contador];

        }
        return somaArray;
    }

    validarNumeros(body) {

        let somaPares = 0;
        let somaImpares = 0;

        for (let contador = 0; contador < body.length; contador++) {
            if (body[contador] % 2 == 0) {
                somaPares += body[contador];
            } else {
                somaImpares += body[contador];
            }

        }
        return {
            somaPares,
            somaImpares
        };
    }

    validaIdadePessoa(body) {
        let qtdPessoaComMais25 = 0;
        let qtdPessoaComMenos25 = 0;

        for (let contador = 0; contador < body.length; contador++) {
            if (body[contador].idade >= 25) {
                qtdPessoaComMais25 += 1;
            } else {
                qtdPessoaComMenos25 += 1;
            }
        }
        return {
            pessoasComMais25: qtdPessoaComMais25,
            pessoasComMenos25: qtdPessoaComMenos25
        }
    }

    validaPessoa(body) {
        let qtdProgramadorMaior30 = 0;

        for (let contador = 0; contador < body.length; contador++) {
            if (body[contador].profissao.toLowerCase() === 'analista de sistemas' ||
                body[contador].profissao.toLowerCase() === 'programador'
            ) {
                if (body[contador].idade >= 30) {
                    qtdProgramadorMaior30 += 1;
                }
            }
        }
        return {
            pessoasProgramadorOuAnalistaMaior30: qtdProgramadorMaior30,
        }
    }

    validaMarca(body) {

        let qtdMarcaFIAT = 0;
        let qtdMarcavolkwagem = 0;
        let qtdToyota = 0;
        let qtdMarcaChevrolet = 0;


        for (let contador = 0; contador < body.length; contador++) {

            if (body[contador].marca.toLowerCase() === 'fiat') {
                qtdMarcaFIAT += 1;
            }
            if (body[contador].marca.toLowerCase() === 'volkwagem') {

                qtdMarcavolkwagem += 1;

            }
            if (body[contador].marca.toLowerCase() === 'toyota') {

                qtdToyota += 1;

            }
            if (body[contador].marca.toLowerCase() === 'chevrolet') {

                qtdMarcaChevrolet += 1;
            }

        }
        return {
            quantidadeFiat: qtdMarcaFIAT,
            quatidadeVolkwagem: qtdMarcavolkwagem,
            quantidadeToyota: qtdToyota,
            quatidadeChevrolet: qtdMarcaChevrolet

        }

    }

    incluirNovoObjetoCarro(body) {
        let arrRetornoFiat = [];

        body.forEach(item => {
            if (item.marca.toLowerCase() === 'fiat') {
                arrRetornoFiat.push(item);
            }
        });

        return arrRetornoFiat;

    }

    agruparCarros(body) {
        let carrosFiat = [];
        let carrosVolkWagem = [];
        let carrosChevrolet = [];
        let carrosToyota = [];

        body.forEach(item => {
            if (item.marca.toLowerCase() === 'fiat') {
                carrosFiat.push(item);
            }
            if (item.marca.toLowerCase() === 'volkwagem') {
                carrosVolkWagem.push(item);
            }
            if (item.marca.toLowerCase() === 'chevrolet') {
                carrosChevrolet.push(item);
            }
            if (item.marca.toLowerCase() === 'toyota') {
                carrosToyota.push(item);
            }
        });

        return {
            carrosFiat,
            carrosVolkWagem,
            carrosChevrolet,
            carrosToyota

        }
    }

    async consultarCep() {
        try {
            const result = await axios.get('http://viacep.com.br/ws/72120190/json/');

            return result.data;

        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    async consultarCep2(cep) {
        try {

            const result = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);

            return result.data;

        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    async verificarCidadeIdade(body) {
        let pessoasTagua = [];
        let reqCorreio;
        for (let contador = 0; contador < body.length; contador++) {

            reqCorreio = await axios.get(`http://viacep.com.br/ws/${body[contador].cep}/json/`);
            let bairro = reqCorreio.data.bairro;
            bairro = bairro.substring(0, 10);

            if (bairro.toLowerCase() === 'taguatinga' && body[contador].idade >= 25) {
                pessoasTagua.push({
                    pessoaQueMoraEmTagua: body[contador].nome,
                    idadePessoa: body[contador].idade
                });
            }
        }

        return pessoasTagua;

    }

    async verificarUf(body) {
        let ufVerificadas = [];
        let reqCorreio;

        for (let contador = 0; contador < body.length; contador++) {

            reqCorreio = await axios.get(`http://viacep.com.br/ws/${body[contador].cep}/json/`);
            let uf = reqCorreio.data.uf;

            console.log('uf user', body[contador].uf);
            console.log('uf correio', uf);
            if (uf.toLowerCase() === body[contador].uf.toLowerCase()) {
                ufVerificadas.push({
                    pessoasComUfVerificadas: body[contador].nome,
                });
            }


        }

        return ufVerificadas;
    }


}
module.exports = ApiService;