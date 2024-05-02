import Modal from "react-modal";
import css from "./ImageModal.module.css";

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "20",
  },
  content: {
    overflow: "hidden",
    top: "50px",
    left: "100px",
    right: "100px",
    bottom: "50px",
  },
};
export default function ImageModal({
  isOpenModal,
  onCloseModal,
  dataImg: { alt_description, urls,user,likes},
}) {
  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        ariaHideApp={false}
        onRequestClose={onCloseModal}
        style={modalStyle}
      >
        <img className={css.imgModal} src={urls.regular} alt={alt_description} />
        <p>Autor: {user.name}</p>
        <p>likes: {likes}</p>
        <p>Description Image: {alt_description}</p>
      </Modal>
    </div>
  );
}
