const FuncionarioService = require('../service/funcionarioService')
class FuncionarioController{
    
    async listarFuncionario(){
        const funcionarioService = new FuncionarioService();
        return funcionarioService.listarFuncionario();
    }

    async consultarIdEstados(id){
        const funcionarioService = new FuncionarioService();
       
        return funcionarioService.consultarIdEstados(id);
    }

    async consultarNomeFuncionario(nome){
        const funcionarioService = new FuncionarioService();
       
        return funcionarioService.consultarNomeFuncionario(nome);
    }
    
    async consultarFuncionarioIdade(idade){
        const funcionarioService = new FuncionarioService();
       
        return funcionarioService.consultarFuncionarioIdade2(idade);
    }


    async consultarFuncionarioDepartamento(dep){
        const funcionarioService = new FuncionarioService();
       
        return funcionarioService.consultarFuncionarioDepartamento(dep);
    }

    async consultarFuncionarioEspecifico(idade,cargo,departamento){
        const funcionarioService = new FuncionarioService();
       
        return funcionarioService.consultarFuncionarioEspecifico(idade,cargo,departamento);
    }
    async inserirFuncionario(body) {
        const funcionarioService = new FuncionarioService();
        return await funcionarioService.inserirFuncionario(body);
     }
     async editarFuncionario(body,id) {
        const funcionarioService = new FuncionarioService();
        return await funcionarioService.editarFuncionario(body,id);
     }
     async deletarFuncionario(body,id) {
        const funcionarioService = new FuncionarioService();
        return await funcionarioService.deletarFuncionario(body,id);
     }
}

module.exports = FuncionarioController;