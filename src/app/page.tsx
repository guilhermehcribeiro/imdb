// "use client";
import Results from "@/components/Results";
import { MovieRepository } from "@/repositories/MovieRepository";
import { useEffect } from "react";

const API_KEY = process.env.API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const genre = searchParams?.genre || "feetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1"}`,
    {
      next: { revalidate: 10000 },
    }
  );

  const test = await MovieRepository.getMovies();
  console.log("test", test);

  // useEffect(() => {
  //   (async () => {
  //     const test = await MovieRepository.getMovies();
  //     console.log("test", test);
  //   })();
  // }, []);

  if (!res?.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // const data = { results: [] };
  return (
    <div>
      <Results results={data?.results} />
    </div>
  );
}
