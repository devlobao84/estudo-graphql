const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

// Servidor agora para ajustar tudo 

const resolvers = {
    
        }
    },

    //Criando resolvers dentroda Query

    Query: {
        ola() {
            return 'Show de bola'
        },
        horaAtual() {
            return new Date
        },
        saudacao() {
            return `Fala brother, como vai?`
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: 'Jonas Lobo',
                email: 'jonaslobo@mail.com',
                idade: 37,
                salario: 3000,
                vip: true
            }            
        },
        produtoEmDestaque() {
            return {
                nome: 'Notbook',
                preco: 15.000,
                desconto: 0.10
            }
        },
        numerosMegaSena() {
            // return [4, 8, 12, 15, 62, 77]
            function crescente(a, b) {
                return a - b
            }
            return Array(6).fill(0)
                .map(n => parseInt(Math.random() * 60 + 1))
                .sort(crescente)
        },
        usuarios() {
            return usuarios
        }
    }
}

=======
const schemaPath = './schema/index.graphql'
>>>>>>> 96f471de95e379de00139a09bfbdaa839d0fc984
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
});
