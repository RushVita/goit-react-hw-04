import { useEffect, useState } from "react";
import { fetchArticles } from "../../articles-api";
import ImageGallary from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { RotatingLines } from "react-loader-spinner";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photo, setPhoto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;

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
          return [...prevPhotos, ...data.results];
        });
        setShowBtn(data.total_pages > pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPhoto();
  }, [query, pages]);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const currentImg = (currenId) => {
    const imgUrl = photo.filter((item) => item.id === currenId);

    setCurrentImage(imgUrl);
  };
  console.log(currentImage[0]);
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {photo.length > 0 && (
        <ImageGallary items={photo} onOpenModal={handleOpenModal} onCurrentImg={currentImg} />
      )}
      {error && <div className={css.loader}>Ops Error😔 Please try again!</div>}
      {isLoading && (
        <div className={css.loader}>
          <RotatingLines />
        </div>
      )}
      {photo.length > 0 && showBtn && <LoadMoreBtn onLoadMore={handleLoadMore} />}

      {currentImage.length > 0 && (
        <ImageModal
          isOpenModal={isOpenModal}
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
          dataImg={currentImage[0]}
        ></ImageModal>
      )}
    </div>
  );
}
export default App;
