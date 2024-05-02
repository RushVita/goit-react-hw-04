import css from "./ImageCard.module.css";
export default function ImageCard({ url, alt, onOpenModal, id, onCurrentImg }) {
  return (
    <div className={css.wrapImg}>
      <img
        className={css.img}
        id={id}
        src={url}
        alt={alt}
        onClick={(e) => {
          onOpenModal();
          return onCurrentImg(e.currentTarget.attributes.id.value);
        }}
      />
    </div>
  );
}
