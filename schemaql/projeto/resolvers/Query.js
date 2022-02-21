const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return "Show de bola";
    },
    horaAtual() {
        return new Date();
    },
    saudacao() {
        return `Fala brother, como vai?`;
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: "Jonas Lobo",
            email: "jonaslobo@mail.com",
            idade: 37,
            salario: 3000,
            vip: true,
        };
    },
    produtoEmDestaque() {
        return {
            nome: "Notbook",
            preco: 15.0,
            desconto: 0.1,
        };
    },
    numerosMegaSena() {
        // return [4, 8, 12, 15, 62, 77]
        function crescente(a, b) {
            return a - b;
        }
        return Array(6)
            .fill(0)
            .map((n) => parseInt(Math.random() * 60 + 1))
            .sort(crescente);
    },
    usuarios() {
        return usuarios;
    },
    usuario(_, { id }) {
        const selec = usuarios.filter((u) => u.id == id);
        return selec ? selec[0] : null;
    },
    perfis() {
        return Perfil;
    },
    perfil(_, { id }) {
        const profile = Perfil.filter((p) => p.id == id);
        return profile ? profile[0] : null;
    },
}