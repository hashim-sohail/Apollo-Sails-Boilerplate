import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const CreateRoleInputType = new GraphQLInputObjectType({
    name: 'CreateRoleInput',
    fields: {
        name: { type: GraphQLString }
    }
});

export {CreateRoleInputType};