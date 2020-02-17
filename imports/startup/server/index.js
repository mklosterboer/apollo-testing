import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
    hi: String
}
`;

const resolvers = {
    Query: {
        hi() {
            return "Hello from GraphQL";
        }
    }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });
