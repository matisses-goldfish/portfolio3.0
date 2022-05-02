const { gql } = require('apollo-server-express');
// change Project/techused if changed to options rather than string

const typeDefs = gql`
type Project {
    title: String
    authors: String
    description: String
    techUsed: String
    dateCreated: String
    github: String
    depolyedLink: String
}

type User {
    _id: ID
    userName: String
    email: String
    password: String
}
`
module.exports = typeDefs;