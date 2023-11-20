import Results from "@/components/Results";
import { MovieRepository } from "@/repositories/MovieRepository";

export default async function SearchPage({
  params,
}: {
  params: {
    searchTerm: string;
  };
}) {
  const searchTerm = params?.searchTerm;

  const data = await MovieRepository.searchMovie(searchTerm)
  const results = data?.results;

  return (
    <div>
      {results && results?.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && results?.length > 0 && <Results results={results} />}
    </div>
  );
}
