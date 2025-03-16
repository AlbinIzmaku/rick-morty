import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query GetCharacters {
      characters {
        results {
          id
          name
          status
          species
          gender
          origin {
            name
          }
        }
      }
    }
  `,
});
// .then((result) => console.log(result));
