import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button onClick={onLoadMore} className={css.btnMorePhoto}>
      Load more
    </button>
  );
}
