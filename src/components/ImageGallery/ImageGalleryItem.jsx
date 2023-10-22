import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ pictureUrl }) {
  return (
    <li className={css.galleryItem}>
      <img src={pictureUrl} alt="" />
    </li>
  );
}
