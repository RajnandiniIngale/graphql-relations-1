const typeDefs = `

    type User {
        id: Int!
        name: String!
        email: String!
        posts : [Post]
    }


    type Post {
        id: Int!
        title: String!
        author: User!
    }

    type Query{
        users: [User]
        user(id: Int!) : User
        posts: [Post]
        post(id: Int!): Post
    }


    type Mutation {
        createUser(name: String!, email: String!): User
        createPost(title: String!, authorId:Int!): Post
    }
`

module.exports = typeDefs;