const FuncionarioService = require('../service/funcionarioService')
class FuncionarioController{
    async listarFuncionario(){
        const funcionarioService = new FuncionarioService();
        return funcionarioService.listarFuncionario();
    }


}

module.exports = FuncionarioController;