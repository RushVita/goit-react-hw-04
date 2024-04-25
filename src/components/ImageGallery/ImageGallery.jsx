import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
export default function ImageGallary({ items }) {
  console.log(items)
  return (
    <ul className={css.wrap}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard url={item.urls.small} />
        </li>
      ))}
    </ul>
  );
}
