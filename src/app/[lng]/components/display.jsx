import { useQuery } from "@apollo/client";
import { useState, useRef, useCallback, useEffect } from "react";
import CharacterList from "./characterList";
import Filters from "@/app/[lng]/components/filter";
import { GET_CHARACTERS } from "@/app/graphql/queries";
import Loader from "./loader";

export default function Display({ t }) {
  const [filters, setFilters] = useState({ status: "", species: "" });
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [resetList, setResetList] = useState(false);

  const { loading, error, data, fetchMore, refetch } = useQuery(
    GET_CHARACTERS,
    {
      variables: {
        page,
        status: filters.status || null,
        species: filters.species || null,
      },
      fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    setPage(1);
    setCharacters([]);
    setResetList(true);
  }, [filters]);

  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters((prev) => {
        const mergedCharacters = resetList
          ? data.characters.results
          : [...prev, ...data.characters.results];

        const uniqueCharacters = Array.from(
          new Map(mergedCharacters.map((char) => [char.id, char])).values()
        );

        return uniqueCharacters;
      });

      setResetList(false);
    }
  }, [data]);

  const observer = useRef();
  const lastCharacterRef = useCallback(
    (node) => {
      if (loading || resetList) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
          fetchMore({
            variables: {
              page: page + 1,
              status: filters.status || null,
              species: filters.species || null,
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              if (!fetchMoreResult?.characters?.results) return prevResult;

              return {
                characters: {
                  ...fetchMoreResult.characters,
                  results: [
                    ...prevResult.characters.results,
                    ...fetchMoreResult.characters.results,
                  ],
                },
              };
            },
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, fetchMore, page, filters, resetList]
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Filters setFilters={setFilters} t={t} />
      <CharacterList
        characters={characters}
        lastCharacterRef={lastCharacterRef}
        t={t}
      />
      {loading && (
        <div
          role="status"
          className="flex justify-center items-center h-screen"
        >
          <Loader />
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
