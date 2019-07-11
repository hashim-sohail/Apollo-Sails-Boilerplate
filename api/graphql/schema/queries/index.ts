import { HelperQueries } from './helper';
import { GraphQLObjectType } from 'graphql';

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...HelperQueries
    }
});

export { RootQuery }