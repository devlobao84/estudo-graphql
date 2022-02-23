let id = 1
function nextid() {
    return id++
}

const perfis = [
    { id: 1, nome: "Perfil de uma pessoa jovem, ativa e cheia de ideias" },
    { id: 2, nome: "adminstrador" },
    { id: 3, nome: "gerente" },
];

const usuarios = [
    {
        id: nextid(),
        nome: "Priscila Amor",
        email: "pri@mail.com",
        idade: 31,
        salario: 1550.0,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: nextid(),
        nome: "Jonas Lobo",
        email: "lobo@mail.com",
        idade: 37,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: nextid(),
        nome: "Pietro Lobo",
        email: "pietro@mail.com",
        idade: 31,
        perfil_id: 3,
        status: 'BLOQUEADO'
    },
    {
        id: nextid(),
        nome: "Maria Sogra",
        email: "maria@mail.com",
        idade: 60,
        perfil_id: 3,
        status: 'ATIVO'
    },
];

module.exports = {
    usuarios,
    perfis,
    nextid
}