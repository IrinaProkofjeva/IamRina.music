document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       MENU
    ================================= */

    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    const closeMenu = document.getElementById("closeMenu");

    function openMenu() {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSideMenu() {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", openMenu);

    closeMenu.addEventListener("click", closeSideMenu);

    overlay.addEventListener("click", closeSideMenu);


    /* Close menu when clicking a link */

    const menuLinks = document.querySelectorAll(".menu-links a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            closeSideMenu();

        });

    });


    /* ESC closes menu */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeSideMenu();

        }

    });


    /* ================================
       SIMPLE MUSIC PLAYER
    ================================= */

    const playButton = document.getElementById("playButton");
    const progress = document.getElementById("playerProgress");
    const time = document.getElementById("playerTime");

    let playing = false;
    let seconds = 0;
    let playerInterval = null;

    playButton.addEventListener("click", function () {

        if (!playing) {

            playing = true;

            playButton.textContent = "❚❚";

            playerInterval = setInterval(function () {

                seconds++;

                if (seconds > 204) {
                    seconds = 0;
                }

                const percent = (seconds / 204) * 100;

                progress.style.width = percent + "%";

                const minutes = Math.floor(seconds / 60);

                const remainingSeconds = seconds % 60;

                time.textContent =
                    String(minutes).padStart(2, "0") +
                    ":" +
                    String(remainingSeconds).padStart(2, "0");

            }, 1000);

        } else {

            playing = false;

            playButton.textContent = "▶";

            clearInterval(playerInterval);

        }

    });

});
