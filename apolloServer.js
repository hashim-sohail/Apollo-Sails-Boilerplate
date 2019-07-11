const express = require('express');
const { ApolloServer, PubSub, UserInputError, AuthenticationError } = require('apollo-server-express');
const schema = require('./api/graphql/schema').Schema;
const fs = require('fs');
const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const pubsub = new PubSub();
// console.log(pubsub);
module.exports = { pubsub };

const configurations = {
    // Note: You may need sudo to run on port 443
    // production: { ssl: true, port: 443, hostname: 'example.com' },
    development: { ssl: false, port: 1338, hostname: 'localhost' },
    local: { ssl: false, port: 1338, hostname: 'localhost' }
}

const environment = process.env.NODE_ENV || 'development'

const config = configurations[environment]

const apollo = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    /**
     * To allow the schema information to be public
     * Schema information includes all types, mutations and queries
     */
    introspection: true,
    /**
     * To allow the GQL Playground UI be accessible
     */
    playground: true,
    engine: {
        /**
         * To sync your GQL Server with Apollo Graphql 
         * https://engine.apollographql.com/login
         */
        apiKey: "YOUR APOLLO ENGINE API KEY"
    },
    formatError: error => {
        return error;
    },
});

const app = express()
authMiddleware = (req, res, next) => {
    // console.log("\x1b[32m%s\x1b[0m", `Requested ${req.url} @ ${new Date()}`);
    // console.log(req.body);

    if (req.url == '/graphql') {
        return next();
    } else {
        res.sendStatus(401)
    };
}
app.use('*', cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(authMiddleware);

apollo.applyMiddleware({ app })

// Create the HTTPS or HTTP server, per configuration
var server
if (config.ssl) {
    // Assumes certificates are in .ssl folder from package root. Make sure the files
    // are secured.
    server = https.createServer(
        {
            key: fs.readFileSync(`./ssl/${environment}/server.key`),
            cert: fs.readFileSync(`./ssl/${environment}/server.crt`)
        },
        app
    )
} else {
    server = http.createServer(app)
}

// Add subscription support
apollo.installSubscriptionHandlers(server)

const startApolloServer = () => {
    server.listen({ port: config.port }, () => {
        console.log(`🚀 Server ready at http://localhost:${config.port}${apollo.graphqlPath}`)
        console.log(`🚀 Subscriptions ready at ws://localhost:${config.port}${apollo.subscriptionsPath}`)
    });
}

module.exports = { startApolloServer }