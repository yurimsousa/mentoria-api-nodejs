const Funcionario = require('../../moldels/funcionariotb');
const Database = require('../../database/conectDb');
class FuncionarioService {

    async listarFuncionario() {
        const db = new Database();
        try {
            const result = await Funcionario.findAll();
            return result;
        } catch (erro) {
            console.log(erro);
            throw new Error(erro);
        }
    }

    async consultarIdEstados(id) {

        const db = new Database();

        try {

            const result = await Funcionario.findByPk(id);

            if (result) {
                return result;
            }
            return "Informação não encontrada com o id informado";
        } catch (erro) {
            console.log(erro);
            throw new Error(erro);
        }


    }

    async consultarFuncionarioIdade(idade) {

        const db = new Database();

        try {

            const result = await Funcionario.findByPk(id);

            if (result) {
                return result;
            }
            return "Informação não encontrada com o id informado";
        } catch (erro) {
            console.log(erro);
            throw new Error(erro);

        }


    }
    async consultarNomeFuncionario(nome) {


        const db = new Database();

        try {

            const result = await Funcionario.findOne({ where: { nome: nome } });
            if (result) {
                return result;
            }
            return "Informação não encontrada com o nome informado";

        } catch (erro) {
            console.log(erro);
            throw new Error(erro);
        }

    }

    async consultarFuncionarioIdade2(idade) {
        const db = new Database();

        try {
            const result = await Funcionario.findAll({ where: { idade: idade } });
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            console.log(erro);
            throw new Error(erro);
        }


    }

    async consultarFuncionarioDepartamento(dep) {
        const db = new Database();

        try {
            const result = await Funcionario.findAll({ where: { departamento: dep } });
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            console.log(erro);
            throw new Error(erro);
        }

    }

    async consultarFuncionarioEspecifico(idade, cargo, departamento) {
        const db = new Database();

        try {
            const result = await Funcionario.findAll({ where: { idade: idade, cargo: cargo, departamento: departamento } });
            if (result) {
                return result;
            }
            return "Informação não encontrada!";
        }
        catch (erro) {
            console.log(erro);
            throw new Error(erro);
        }


    }

    async inserirFuncionario(body) {
        const db = new Database();
        try {
            const { nome, idade, cargo, departamento } = body;

            const user = await Funcionario.create({ nome, idade, cargo, departamento });
            return user;
        } catch (error) {
            throw new Error(error);
        }

    }

    async editarFuncionario(body, id) {
        const db = new Database();
        try {
            const { nome, idade, cargo, departamento } = body;

            const user = await Funcionario.update({ nome, idade, cargo, departamento }, { where: { idFuncionario: id } });

            if (user) {
                return {
                    message: "funcionario alterado com sucesso!"
                }
            }
            return user;
        } catch (error) {
            throw new Error(error);
        }

    }

    async deletarFuncionario(body, id) {
        const db = new Database();
        try {
            const { nome, idade, cargo, departamento } = body;

            const user = await Funcionario.findAll({ where: { idFuncionario: id } });
            if (user.length === 0) {
                return {
                    message: "usuario nao encontrado"
                }
            } else {
                await Funcionario.destroy({ where: { idFuncionario: id } });
                return { message: "usuario excluido com sucesso!" }
            }

        } catch (error) {
            throw new Error(error);
        }

    }
    async editarTodosFuncionario(body) {
        const db = new Database();

        try {
            for (let contador = 0; contador < body.length; contador++) {
                let idfuncionario = body[contador].idFuncionario;
                let departamentofuncioario = body[contador].departamento;

                console.log(`alterando o id funcionario:${idfuncionario}`);
                await Funcionario.update(
                    {
                        departamento: departamentofuncioario,
                    }, {
                    where: {
                        idFuncionario: idfuncionario
                    }
                }
                );
            }
            return { message: "usuario alterado com sucesso!" }
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

module.exports = FuncionarioService;