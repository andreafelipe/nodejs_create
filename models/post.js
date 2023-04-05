const db = require("./banco")

const Agendamento = db.sequelize.define("agendamento",{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.BIGINT
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data:{
        type: db.Sequelize.DATE
    },
    observacao:{
        type: db.Sequelize.STRING
    }
})

//Agendamento.sync({force:true})

module.exports = Agendamento