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

}

module.exports = FuncionarioController;