import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ pictureUrl }) {
  return (
    <li className={css.galleryList}>
      <img className={css.galleryPic} src={pictureUrl} alt="" />
    </li>
  );
}
