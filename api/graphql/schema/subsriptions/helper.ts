import { HelperType } from '../../types';
import { GraphQLID } from 'graphql';

const HelperSubscriptions = {
    Helper: {
        type: HelperType,
        args: {
            input: { type: GraphQLID }
        },
        subscribe: (parent, args, ctx) => {
            let id = args.input;
            const { pubsub } = require('../../../../apolloServer');
            return pubsub.asyncIterator(`${id}`);
        }
    }
}

export { HelperSubscriptions }