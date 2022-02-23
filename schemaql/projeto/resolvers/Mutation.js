const { usuarios, nextid } = require('../data/db')

module.exports = {
    novoUsuario(_, { nome, email, idade }) {
        const novo = {
            id: nextid(),
            nome,
            email,
            idade,
            perfil_id: 1,
            status: 'ATIVO'
        }
        
        usuarios.push(novo)
        return novo
    }
}

