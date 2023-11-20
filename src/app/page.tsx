import Results from "@/components/Results";
import { MovieRepository } from "@/repositories/MovieRepository";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const genre = searchParams?.genre || "feetchTrending";


  const data = await MovieRepository.getMovies(genre);

  return (
    <div>
      <Results results={data?.results} />
    </div>
  );
}
