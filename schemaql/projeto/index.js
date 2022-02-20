const { ApolloServer, gql } = require("apollo-server");

// Criando dados

const usuarios = [
    {
        id: 1,
        nome: "Priscila Amor",
        email: "pri@mail.com",
        idade: 31,
        salario: 1550.0,
        perfil_id: 1,
    },
    {
        id: 2,
        nome: "Jonas Lobo",
        email: "lobo@mail.com",
        idade: 37,
        perfil_id: 2,
    },
    {
        id: 3,
        nome: "Pietro Lobo",
        email: "pietro@mail.com",
        idade: 31,
        perfil_id: 3,
    },
    {
        id: 4,
        nome: "Maria Sogra",
        email: "maria@mail.com",
        idade: 60,
        perfil_id: 3,
    },
];

const Perfil = [
    { id: 1, nome: "Perfil de uma pessoa jovem, ativa e cheia de ideias" },
    { id: 2, nome: "adminstrador" },
    { id: 3, nome: "gerente" },
];

// Criando tipos de dados e solicitando através das querys

const typeDefs = gql`
  scalar Date

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
    perfil: Perfil     
  }

  type Perfil {
    id: Int 
    nome: String
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String
    horaAtual: Date
    saudacao: String
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: ID): Usuario
    perfis: [Perfil]
    perfil(id: Int): Perfil   
  }
`;

// Resolvendo os dados solicitados

const resolvers = {
    // Scalar o tipo da Query
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco * (1 - produto.desconto);
            } else {
                return produto.preco;
            }
        },
    },

    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },

        perfil(usuario) {
            const profile = Perfil.filter((p) => p.id === usuario.perfil_id);
            return profile ? profile[0] : null;
        },
    },



    //Criando resolvers dentro da Query

    Query: {
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
    },
};

// Servidor

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
});
