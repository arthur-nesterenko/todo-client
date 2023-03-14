import './assets/index.css';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {
    RouterProvider,
} from "react-router-dom";
import {AuthProvider} from "./context/auth";
import TokenService from "./services/token";

import router from './routes'


const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {
    const token = TokenService.get()
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


function App() {
    return <div className='h-screen flex flex-col items-center justify-center bg-[#f6f7f8]'>
        <ApolloProvider client={client}>
            <AuthProvider>
                <RouterProvider router={router} fallbackElement={<div
                    className='h-screen flex flex-col items-center justify-center'>Loading</div>}/>
            </AuthProvider>
        </ApolloProvider>
    </div>
}

export default App;
