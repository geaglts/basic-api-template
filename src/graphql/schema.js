import { gql } from "apollo-server-express";

export default gql`
    scalar JSON

    type Query {
        query: String!
    }

    type Mutation {
        mutation: String!
    }
`;
