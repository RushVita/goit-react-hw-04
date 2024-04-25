import css from "./ImageCard.module.css"
export default function ImageCard({url}) {
    
  return (
    <div className={css.wrapImg}>
      <img className={css.img} src={url} alt="" />
    </div>
  );
}
