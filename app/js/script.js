const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmarkText = document.querySelector(".bookmark-text");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal1-btn");
const modal1 = document.querySelector(".modal1");
const cta1 = document.querySelector(".cta1");


//event listeners

bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("bookmarked");

    if (bookmarkBtn.classList.contains("bookmarked")){
        bookmarkText.textContent = "Bookmarked";
    } else{
        bookmarkText.textContent = "Bookmark";
    }
});


closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

cta1.addEventListener("click", () => {
    overlay.style.display = "flex";
    window.scrollTo(0, 0);
});