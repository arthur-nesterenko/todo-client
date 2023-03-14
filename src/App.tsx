import React from 'react';
import './assets/index.css';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});


function App() {
    return <ApolloProvider client={client}>
        <h1>Hi there</h1>
    </ApolloProvider>
}

export default App;
