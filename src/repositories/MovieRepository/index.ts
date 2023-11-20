import Api from "@/services/api";
import { IMovie } from "@/types/MovieData";

export const MovieRepository = {
  getMovies: async (genre: string | string[]) => {
    const genreUrl =  genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week";
    const res = await Api.get(`/${genreUrl}`, null, {
      next: { revalidate: 10000 },
    });
    const data = res?.json();
    return data;
  },

  getMovie: async (movieId: string): Promise<IMovie> => {
    const res = await Api.get(`/movie/${movieId}`, null, {
      next: { revalidate: 10000 },
    });
    const data = res?.json();
    return data;
  },

  searchMovie: async (searchTerm: string) => {
    const res = await Api.get(`/search/movie`, `&query=${searchTerm}`, {
      next: { revalidate: 10000 },
    });
    const data = res?.json();
    return data;
  },
};
