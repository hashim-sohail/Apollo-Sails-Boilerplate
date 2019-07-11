import { Mutation } from './mutations';
import { RootQuery } from './queries';

import { GraphQLSchema } from 'graphql';

const Schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});

export { Schema };