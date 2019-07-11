import { HelperType } from '../../types';
import { GraphQLList } from 'graphql';
declare var sails: any;

const HelperQueries = {
    helpers: {
        type: new GraphQLList(HelperType),
        resolve: async (parent, args, ctx) => {
            return await sails.models.helper.find();
        }
    }
}

export { HelperQueries }