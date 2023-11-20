import Api from "@/services/api";

export const MovieRepository = {
  getMovies: async () => {
    const res = await Api.get(`/movie/top_rated`);
    const data = res?.json();
    return data;
  },
};
