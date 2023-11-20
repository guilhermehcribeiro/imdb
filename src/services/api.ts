const BASE_URL = process.env.API;
const API_KEY = process.env.API_KEY;

const Api = () => {
  const defaultOptions = {
    baseUrl: BASE_URL || "",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const fetchWithErrorHandling = async (url: string, options: RequestInit) => {
    let res = null;

    try {
      res = await fetch(url, options);

      if (res?.ok) throw new Error("Error to fetch data");
    } catch (error) {
      console.error(error);
    }
    return res;
  };

  const get = (url: string, query: string | null, options: RequestInit = {}) => {
    const requestOptions = {
      ...defaultOptions,
      ...options,
      method: "GET",
    };
    return fetchWithErrorHandling(`${BASE_URL}${url}?api_key=${API_KEY}${query ? query : ''}&language=en-US`, requestOptions);
  };

  return {
    get,
  };
};

export default Api();
