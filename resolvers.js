const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const resolvers = {

    Query: {

        users: async () => { return await prisma.user.findMany() },
        user: async (_, { id }) => { return await prisma.user.findUnique({ where: { id } }) },
        posts: async () => { return await prisma.post.findMany() },
        post: async (_, { id }) => { return await prisma.post.findUnique({ where: { id } }) }
    },

    Mutation: {

        createUser: async (_, { name, email }) => {
            return await prisma.user.create({
                data: {
                    name,
                    email
                }
            })
        },


        createPost: async (_, { title, authorId }) => {
            return await prisma.post.create({
                data: {
                    title,
                    authorId
                },


            })
        }

    },

    User: {
        posts: async (parent) => {
            return await prisma.post.findMany({ where: { authorId: parent.id } })
        }
    },

    Post: {
        author: async (parent) => {
            return await prisma.user.findUnique({ where: { id: parent.authorId } })
        }
    }
}

module.exports = resolvers;