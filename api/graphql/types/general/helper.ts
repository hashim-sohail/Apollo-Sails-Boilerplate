import { GraphQLObjectType, GraphQLString } from 'graphql';
import { RoleType } from './role';
declare var sails: any;

const HelperType = new GraphQLObjectType({
    name: 'Helper',
    fields: {
        name: { type: GraphQLString },
        role: {
            type: RoleType,
            resolve: (parent, args, ctx) => {
                return sails.models.role.findOne({ id: parent.role });
            }
        }
    }
});

export { HelperType };