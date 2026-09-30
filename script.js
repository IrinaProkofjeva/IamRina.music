```javascript
// =========================================
// I AM RINA
// MENU
// =========================================

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");


// Open / close menu
menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    sideMenu.classList.toggle("open");

    menuOverlay.classList.toggle("active");

});


// Close menu when clicking overlay
menuOverlay.addEventListener("click", closeMenu);


// Close menu after clicking a link
document.querySelectorAll(".side-menu a").forEach(link => {

    link.addEventListener("click", closeMenu);

});


function closeMenu() {

    menuButton.classList.remove("active");

    sideMenu.classList.remove("open");

    menuOverlay.classList.remove("active");

}


// =========================================
// SIMPLE MUSIC PLAYER ANIMATION
// =========================================

const playButton = document.getElementById("playButton");
const progressBar = document.querySelector(".progress-bar");

let playing = false;
let progress = 30;
let timer;


playButton.addEventListener("click", () => {

    playing = !playing;

    if (playing) {

        playButton.innerHTML = "❚❚";

        timer = setInterval(() => {

            progress += 0.5;

            if (progress >= 100) {

                progress = 0;

            }

            progressBar.style.width = progress + "%";

        }, 100);

    } else {

        playButton.innerHTML = "▶";

        clearInterval(timer);

    }

});


// =========================================
// CLOSE MENU WITH ESC
// =========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMenu();

    }

});
```
