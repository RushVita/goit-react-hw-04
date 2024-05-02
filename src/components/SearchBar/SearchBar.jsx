import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
export default function SearchBar({ onSearch }) {
  return (
    <header className={css.wrap}>
      <form
        className={css.form}
        onSubmit={(e) => {
          return onSearch(e);
        }}
      >
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit"></button>
        <IoSearch className={css.icon} />
      </form>
    </header>
  );
}
