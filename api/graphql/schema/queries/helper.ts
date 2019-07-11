import { HelperType } from '../../types';
declare var sails: any;

const HelperQueries = {
    helpers: {
        type: HelperType,
        resolve: async (parent, args, ctx) => {
            return await sails.models.helper.find();
        }
    }
}

export { HelperQueries }