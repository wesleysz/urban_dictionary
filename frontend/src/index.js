import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

// create an http link for query & mutation:
const httpLink = new HttpLink({
  uri: "http://localhost:8000/"
});

// create a WebSocket link for subscription:
const wsLink = new WebSocketLink({
  uri: "ws://localhost:8000/", 
  options: { reconnect: true }
});

//split link based on operation type
const link = split( 
  ({query})=>{
    const definition = getMainDefinition(query)
    return(
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore({}) 
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
