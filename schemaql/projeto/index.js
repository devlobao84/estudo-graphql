const { ApolloServer, gql } = require('apollo-server')


const usuarios = [
    {
        id: 1,
        nome: "Priscila Amor",
        email: "pri@mail.com",
        idade: 31,
        salario: 1550.00
    }, {
        id: 2,
        nome: "Jonas Lobo",
        email: "lobo@mail.com",
        idade: 37,
    }, {
        id: 4,
        nome: "Pietro Lobo",
        email: "pietro@mail.com",
        idade: 31,
    }, {
        id: 4,
        nome: "Maria Sogra",
        email: "maria@mail.com",
        idade: 60,
    },    
    ]

const perfis = [
    { id: 1, nome: "comum" },
    { id:2, nome: "adminstrador"},
]

const typeDefs = gql`
     scalar Date

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float 
    }

    type perfis {
        id: Int 
        nome: String 
    }  

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean 
    }

    type Perfil {
        id: ID
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
`
const resolvers = {
    // Scalar o tipo da Query 
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco * (1 - produto.desconto)
            } else {
                return produto.preco
            }
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
        },
        usuario(_, { id }){
            const selec = usuarios.filter(u => u.id == id)
            return selec ? selec[0] : null 
            
        },
        perfis() {
            return perfis 
        },
        perfil(_, { id }) {
            const seletor = perfis.filter(p => p.id === id)
            return seletor ? seletor[0] : null 
        }       
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers

})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})