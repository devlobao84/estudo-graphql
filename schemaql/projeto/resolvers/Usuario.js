const { perfis } = require ('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },

    perfil(usuario) {
        const profile = Perfil.filter((p) => p.id === usuario.perfil_id);
        return profile ? profile[0] : null;
    },
}