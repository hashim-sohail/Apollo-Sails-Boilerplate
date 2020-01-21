import { HelperMutations } from './helper';
import { GraphQLObjectType } from 'graphql';
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...HelperMutations,
    }
});

export { Mutation }