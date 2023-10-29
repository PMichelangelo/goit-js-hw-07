import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems))

list.addEventListener("click", handleClick)

let instance;
let isModalOpened = false;

function handleClick(event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
        return
    }
    const currentImage = event.target.closest(".gallery__item") 
    const currentIndex = Array.from(list.children).indexOf(currentImage);
    instance = basicLightbox.create(`
    <div class="modal">
    <img
      class="gallery__image"
      src="${galleryItems[currentIndex].original}"
      alt="${galleryItems[currentIndex].description}"
    />
</div>`)
    
    instance.show();
    isModalOpened = true;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isModalOpened) {
        instance.close()
        isModalOpened = false;
    }
})

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    ).join("")
}

console.log(galleryItems);
