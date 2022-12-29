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

}
module.exports = ApiService;