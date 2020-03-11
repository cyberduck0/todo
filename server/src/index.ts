import { ApolloServer, ApolloError, ValidationError} from 'apollo-server';
import schema from './schemas/todo';

const server = new ApolloServer({
    schema,
});

server.listen({port: 4000}).then(({url}) => {
    console.log(`apollo ${url}`);
})