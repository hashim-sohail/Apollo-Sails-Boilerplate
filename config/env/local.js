module.exports = {
    datastores: {
        default: {
            adapter: require('sails-mongo'),
            url: 'mongodb://localhost:27017/Helper'
        },
    },

    models: {
        migrate: 'safe',
    },
    security: {
        cors: {
            allowOrigins: "*"
        },

    },

    log: {
        level: 'debug'
    },

    http: {
        cache: 365.25 * 24 * 60 * 60 * 1000, // One year
    },

    port: 1337,

    clientHost: 'localhost',
};
