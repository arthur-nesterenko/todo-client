import {Suspense} from 'react';
import './assets/index.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {
    RouterProvider,
} from "react-router-dom";

import router from './routes'

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});


function App() {
    return <Suspense fallback={<div className='h-screen flex flex-col items-center justify-center'>Loading</div>}>
        <ApolloProvider client={client}>
            <RouterProvider router={router}/>
        </ApolloProvider>
    </Suspense>
}

export default App;
