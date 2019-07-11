import { RoleType, CreateRoleInputType } from '../../types';
import { GraphQLString } from 'graphql';
declare var sails: any;

const RoleMutations = {
    createRole: {
        type: RoleType,
        args: {
            input: { type: CreateRoleInputType },
            name: { type: GraphQLString }
        },
        resolve: async (parent, args, ctx) => {
            let { input, name } = args;
            console.log('INPUT', input);
            console.log('NAME', name);
            return await sails.models.role.create(input).fetch();
        }
    }
}

export { RoleMutations }
