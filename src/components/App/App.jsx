import { useEffect, useState } from "react";
import { fetchArticles } from "../../articles-api";
import ImageGallary from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [photo, setPhoto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value;

    setQuery(value.trim());
    setPages(1);
    if (value.trim() === query) {
      return; // Запобіжник при подвійному одинаковому запиті.
    }
    setPhoto([]);
  };

  const handleLoadMore = () => {
    setPages(pages + 1);
  };

  useEffect(() => {
    if (query === "") {
      return; // Запобіжник при пустому запиті.
    }
    async function getPhoto() {
      try {
        setIsLoading(true);
        const data = await fetchArticles(query, pages);
        setPhoto((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPhoto();
  }, [query, pages]);

  console.log(query, "query");

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {photo.length > 0 && <ImageGallary items={photo} />}
      {error && <div className={css.loader}>Ops Error😔 Please try again!</div>}
      {isLoading && (
        <div className={css.loader}>
          <RotatingLines />
        </div>
      )}
      {photo.length > 0 && !isLoading && (
        <button onClick={handleLoadMore} className={css.loader}>
          Load more
        </button>
      )}
    </div>
  );
}
export default App;
