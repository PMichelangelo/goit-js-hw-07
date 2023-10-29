import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector(".gallery")

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems))

list.addEventListener("click", handleClick)

function handleClick(event) {
    event.preventDefault()
}

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt", // Виберіть, звідки брати підписи
    captionDelay: 250,
})

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    ).join("")
}


console.log(galleryItems);
