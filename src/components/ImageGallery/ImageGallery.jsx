import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallary({ items, onOpenModal, onCurrentImg }) {
  return (
    <ul className={css.wrap}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard
            onOpenModal={onOpenModal}
            url={item.urls.small}
            alt={item.alt_description}
            id={item.id}
            onCurrentImg={onCurrentImg}
          />
        </li>
      ))}
    </ul>
  );
}
