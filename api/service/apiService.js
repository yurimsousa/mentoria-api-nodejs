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
        const nomeFormatado= nome.toString();
        console.log("nome formatado", nomeFormatado.toLowerCase());
        if (nomeFormatado.toLowerCase() === "clodomir") {
            return "Nome do usuario correto"
        } else {
            return "Nome do usuario incorreto"
        }
    }
}
module.exports = ApiService;