const { Sequelize, Model } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init(
            {
                idFuncionario: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_FUNCIONARIO'
                    
                },
                idade: {
                    type: Sequelize.BIGINT,
                    field: 'IDADE',
                    allowNull: false
                },
                nome: {
                    type: Sequelize.STRING(255),
                    field: 'NOME',
                    allowNull: false
                },
                cargo: {
                    type: Sequelize.STRING(255),
                    field: 'CARGO',
                    allowNull: false
                },
                departamento: {
                    type: Sequelize.STRING(255),
                    field: 'DEPARTAMENTO',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'Funcionariotb',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Funcionario