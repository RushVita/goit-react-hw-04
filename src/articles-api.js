import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchArticles = async (searchQuery, currentPage) => {
  const response = await axios.get("search/photos?", {
    params: {
      client_id: "mqDPM0rQiy8nOpN8YSpVraB44q-1-lhs9UalSmc-L1c",
      per_page: 4,
      query: searchQuery,
      pages: currentPage,
    },
  });

  return response.data.results;
};
