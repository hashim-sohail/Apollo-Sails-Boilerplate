import { HelperType, CreateHelperInputType } from '../../types';
declare var sails: any;

const HelperMutations = {
    createHelper: {
        type: HelperType,
        args: {
            input: { type: CreateHelperInputType }
        },
        resolve: async (parent, args, req) => {
            let { input } = args;       
            sails.models.role.create({name: 'Super Admin'})     
            return await sails.models.helper.create(input).fetch();
        }
    }
}

export { HelperMutations }