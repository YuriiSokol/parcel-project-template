import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
  let link = document.createElement('a');
  link.classList.add('gallery__item');
  link.href = item.original;

  let img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.alt = item.description;

  link.append(img);
  gallery.append(link);
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
