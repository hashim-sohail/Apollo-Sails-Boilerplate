import { GraphQLObjectType, GraphQLString } from 'graphql';

const RoleType = new GraphQLObjectType({
    name: 'Role',
    fields: {
        name: { type: GraphQLString },
        phone: { type: GraphQLString }
    }
});

export { RoleType };
