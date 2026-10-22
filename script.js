
document.addEventListener("DOMContentLoaded", () => {
    // =====================================
    // ANIMATED MUSIC NOTES
    // =====================================
    const background = document.getElementById("musicBackground");
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const notes = ["♪", "♫", "♬", "♩", "𝅘𝅥𝅮"];
    let noteTimer;

    function createNote() {
        if (!background || reduceMotion) return;

        const note = document.createElement("span");
        note.className = "floating-note";
        note.textContent = notes[Math.floor(Math.random() * notes.length)];

        note.style.left = `${Math.random() * 96}%`;
        note.style.fontSize = `${20 + Math.random() * 35}px`;
        note.style.animationDuration = `${9 + Math.random() * 9}s`;
        note.style.opacity = `${0.25 + Math.random() * 0.35}`;

        background.appendChild(note);

        note.addEventListener("animationend", () => note.remove(), {
            once: true
        });
    }

    if (!reduceMotion && background) {
        for (let i = 0; i < 12; i++) {
            setTimeout(createNote, i * 500);
        }

        noteTimer = setInterval(createNote, 1000);
    }

    // =====================================
    // SIDE MENU
    // =====================================
    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    const closeButton = document.getElementById("closeMenu");
    const menuLinks = document.querySelectorAll(".menu-links a");

    function openMenu() {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");
        sideMenu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
        closeButton.focus();
    }

    function closeMenu() {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        sideMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    }

    menuButton.addEventListener("click", () => {
        if (sideMenu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closeButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    // =====================================
    // REAL AUDIO PLAYER
    // =====================================
    const audio = document.getElementById("rinaAudio");
    const playButton = document.getElementById("playButton");
    const progress = document.getElementById("playerProgress");
    const seek = document.getElementById("audioSeek");
    const time = document.getElementById("playerTime");
    const hint = document.getElementById("playerHint");

    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) return "0:00";

        const minutes = Math.floor(seconds / 60);
        const remainder = Math.floor(seconds % 60);

        return `${minutes}:${String(remainder).padStart(2, "0")}`;
    }

    function updatePlayer() {
        const duration = audio.duration || 0;
        const current = audio.currentTime || 0;
        const percent = duration ? (current / duration) * 100 : 0;

        progress.style.width = `${percent}%`;
        seek.value = String(percent);
        time.textContent = formatTime(current);
    }

    playButton.addEventListener("click", async () => {
        if (audio.paused) {
            try {
                await audio.play();
                playButton.textContent = "Ⅱ";
                playButton.setAttribute("aria-label", "Pause music");
                hint.textContent = "NOW PLAYING · I AM RINA";
            } catch (error) {
                hint.textContent =
                    "Add music/rina-song.mp3 to your repository to play music.";
                playButton.textContent = "▶";
            }
        } else {
            audio.pause();
            playButton.textContent = "▶";
            playButton.setAttribute("aria-label", "Play music");
        }
    });

    audio.addEventListener("timeupdate", updatePlayer);
    audio.addEventListener("loadedmetadata", updatePlayer);

    audio.addEventListener("ended", () => {
        playButton.textContent = "▶";
        playButton.setAttribute("aria-label", "Play music");
        updatePlayer();
    });

    audio.addEventListener("error", () => {
        hint.textContent =
            "Song not found. Check the file in music/rina-song.mp3.";
    });

    seek.addEventListener("input", () => {
        if (Number.isFinite(audio.duration) && audio.duration > 0) {
            audio.currentTime = (Number(seek.value) / 100) * audio.duration;
            updatePlayer();
        }
    });

    // =====================================
    // SCROLL REVEAL
    // =====================================
    if (!reduceMotion && "IntersectionObserver" in window) {
        const sections = document.querySelectorAll(
            ".about-copy, .music-card, .gallery-item, .event, .contact-content"
        );

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        sections.forEach(section => {
            section.classList.add("reveal");
            observer.observe(section);
        });
    }
});
