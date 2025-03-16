import { ApolloProvider } from "@apollo/client";
import { client } from "./main";

export default function Apollo({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
