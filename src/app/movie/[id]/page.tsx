import Image from "next/image";
import { MovieRepository } from "@/repositories/MovieRepository";

export default async function MoviePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const movieId = params?.id;
  const movie = await MovieRepository.getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt="image is not available"
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie?.title}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie?.overview}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie?.release_date}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie?.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
