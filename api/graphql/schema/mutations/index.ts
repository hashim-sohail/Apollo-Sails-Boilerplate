import { HelperMutations } from './helper';
import { GraphQLObjectType } from 'graphql';
import { RoleMutations } from './role';
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...HelperMutations,
        ...RoleMutations
    }
});

export { Mutation }