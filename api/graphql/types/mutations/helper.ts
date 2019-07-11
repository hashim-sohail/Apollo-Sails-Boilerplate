import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const CreateHelperInputType = new GraphQLInputObjectType({
    name: 'CreateHelperInput',
    fields: {
        name: { type: GraphQLString }
    }
});

export { CreateHelperInputType };