const ApiService = require("./../service/apiService");
const apiService = new ApiService();
class ApiController {

   calcularMedia(num1, num2, num3, num4, num5) {
      return apiService.calcularMedia(num1, num2, num3, num4, num5);
   }

   calcularMediaAluno(num1, num2, num3, num4, num5) {
      return apiService.calcularMediaAluno(num1, num2, num3, num4, num5);
   }

   verificarNome(nome) {
      return apiService.verificarNome(nome);
   }

   verificarJogador(nome, estadoCivil, funcao) {
      return apiService.verificarJogador(nome, estadoCivil, funcao);
   }

   verificarCandidado(expJava, expNode, expBancoDeDados) {
      return apiService.verificarCanditado(expJava, expNode, expBancoDeDados);
   }

   calcular(acao, num1, num2) {
      return apiService.calcular(acao, num1, num2);
   }

   manipularArray(body) {
      return apiService.manipularArray(body);
   }
   validarNumeros(body) {
      return apiService.validarNumeros(body);
   }

   validaIdadePessoa(body) {
      return apiService.validaIdadePessoa(body);
   }

   validaPessoa(body) {
      return apiService.validaPessoa(body);
   }

   validaMarca(body) {
      return apiService.validaMarca(body);
   }
   incluirNovoObjetoCarro(body) {
      return apiService.incluirNovoObjetoCarro(body);
   }

   agruparCarros(body) {
      return apiService.agruparCarros(body);
   }
   async consultarCep() {
      return await apiService.consultarCep();
   }
   async consultarCep2(cep) {
      return await apiService.consultarCep2(cep);
   }
   
   async verificarPessoaIdade(body) {
      return await apiService.verificarCidadeIdade(body);
   }

   async verificarUf(body) {
      return await apiService.verificarUf(body);
   }
   async consultarEstado() {
      return await apiService.consultarEstado();
   }

   async consultarIdEstados(id) {
      return await apiService.consultarIdEstados(id);
   }
   
   async consultaSiglaEstado(sigla) {
      return await apiService.consultaSiglaEstado(sigla);
   }

   async consultaNomeEstado(nome) {
      return await apiService.consultaNomeEstado(nome);
   }
   
   async consultarRegiao(nome) {
      return await apiService.consultarRegiao(nome);
   }
   async consultarEstado2(nome) {
      return await apiService.consultarEstado2(nome);
   }
   async consultarMunicipio(nome) {
      return await apiService.consultarMunicipio(nome);
   }
}
module.exports = ApiController;