import { GraphQLObjectType, GraphQLString } from 'graphql';

const HelperType = new GraphQLObjectType({
    name: 'Helper',
    fields: {
        name: { type: GraphQLString }
    }
});

export { HelperType };