import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ pictures }) {
  return (
    <ul className={css.gallery}>
      {pictures.map(picture => (
        <ImageGalleryItem key={picture.id} pictureUrl={picture.webformatURL} />
      ))}
    </ul>
  );
}
