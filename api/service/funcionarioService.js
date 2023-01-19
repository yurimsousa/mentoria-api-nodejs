const Funcionario = require('../../moldels/funcionariotb');
const Database = require('../../database/conectDb');
class FuncionarioService{
    
    async listarFuncionario(){
        const db = new Database();
        try {
            const result = await Funcionario.findAll();
            return result;
        } catch (erro) {
            console.log(erro);
            throw new Error(erro);
        }
    }

    async consultarIdEstados(id){
        
        const db = new Database();
        
        try {
        
            const result = await Funcionario.findByPk(id);
            
            if (result){
                return result;
            }
                return "Informação não encontrada com o id informado";    
        } catch (erro) {
            console.log(erro);
            throw new Error(erro);
        } 
        
    
    }

}

module.exports = FuncionarioService;