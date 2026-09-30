* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #050505;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}


/* ================================
   HEADER
================================ */

.header {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 80px;

    padding: 0 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 1000;

    background: linear-gradient(
        rgba(0, 0, 0, 0.8),
        transparent
    );
}

.logo {
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 3px;
}

.logo span {
    color: #e00000;
}


/* ================================
   HAMBURGER
================================ */

.hamburger {
    width: 55px;
    height: 55px;

    background: #0c0c0c;

    border: 1px solid #555;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    gap: 6px;

    cursor: pointer;

    z-index: 1100;
}

.hamburger span {
    width: 25px;
    height: 2px;

    background: white;

    display: block;

    transition: 0.3s;
}

.hamburger:hover {
    background: #d00000;
    border-color: #d00000;
}


/* ================================
   OVERLAY
================================ */

.overlay {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.75);

    z-index: 900;

    opacity: 0;
    visibility: hidden;

    transition: 0.3s;
}

.overlay.active {
    opacity: 1;
    visibility: visible;
}


/* ================================
   SIDE MENU
================================ */

.side-menu {
    position: fixed;

    top: 0;
    right: -420px;

    width: 420px;
    height: 100vh;

    background: #080808;

    border-left: 2px solid #d00000;

    z-index: 1050;

    padding: 35px 45px;

    transition: right 0.4s ease;

    display: flex;
    flex-direction: column;
}

.side-menu.active {
    right: 0;
}

.menu-header {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 60px;
}

.menu-header span {
    color: #d00000;

    font-size: 12px;

    letter-spacing: 5px;
}

.close-menu {
    background: none;

    border: none;

    color: white;

    font-size: 40px;

    cursor: pointer;
}

.menu-links {
    display: flex;
    flex-direction: column;

    gap: 22px;
}

.menu-links a {
    font-size: 42px;

    font-weight: 900;

    letter-spacing: 2px;

    transition: 0.2s;
}

.menu-links a:hover {
    color: #d00000;
    transform: translateX(8px);
}

.menu-bottom {
    margin-top: auto;

    display: flex;
    flex-direction: column;

    gap: 12px;

    color: #777;

    font-size: 11px;

    letter-spacing: 3px;
}

.menu-bottom a:hover {
    color: #d00000;
}


/* ================================
   HERO
================================ */

.hero {
    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    padding: 100px 9%;

    overflow: hidden;

    background:
        radial-gradient(
            circle at 75% 45%,
            #650000,
            transparent 30%
        ),
        linear-gradient(
            120deg,
            #020202,
            #160000
        );
}

.hero::before {
    content: "";

    position: absolute;

    width: 600px;
    height: 600px;

    right: -200px;
    top: 20%;

    background: #a00000;

    filter: blur(180px);

    opacity: 0.25;
}

.hero-content {
    position: relative;

    z-index: 2;

    max-width: 900px;
}

.small-title {
    color: #e00000;

    font-size: 12px;

    letter-spacing: 7px;

    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(90px, 15vw, 220px);

    line-height: 0.8;

    font-weight: 900;

    letter-spacing: -5px;
}

.hero h1 strong {
    display: block;

    color: #d90000;
}

.subtitle {
    margin-top: 35px;

    color: #aaa;

    font-size: 12px;

    letter-spacing: 7px;
}

.main-button {
    display: inline-block;

    margin-top: 40px;

    padding: 17px 30px;

    border: 1px solid #d00000;

    font-size: 11px;

    letter-spacing: 3px;

    transition: 0.3s;
}

.main-button:hover {
    background: #d00000;
}

.hero-scroll {
    position: absolute;

    bottom: 30px;
    left: 40px;

    color: #666;

    font-size: 9px;

    letter-spacing: 4px;
}

.hero-scroll span {
    display: block;

    color: #d00000;

    font-size: 22px;

    margin-top: 5px;
}


/* ================================
   GENERAL SECTIONS
================================ */

.section {
    position: relative;

    min-height: 700px;

    padding: 150px 10%;

    border-top: 1px solid #191919;
}

.section-label {
    position: absolute;

    top: 55px;
    left: 5%;

    color: #444;

    font-size: 11px;

    letter-spacing: 3px;
}

.section-content {
    max-width: 1000px;

    margin-left: auto;
}

.red-text {
    color: #e00000;

    font-size: 11px;

    letter-spacing: 5px;

    margin-bottom: 25px;
}

.section h2 {
    font-size: clamp(70px, 10vw, 145px);

    line-height: 0.82;

    font-weight: 900;

    letter-spacing: -3px;

    margin-bottom: 50px;
}

.section h2 span {
    color: #d00000;
}

.description {
    max-width: 600px;

    color: #999;

    font-size: 16px;

    line-height: 1.9;

    margin-bottom: 20px;
}


/* ================================
   ABOUT
================================ */

.about {
    background:
        linear-gradient(
            120deg,
            #050505,
            #110000
        );
}


/* ================================
   MUSIC
================================ */

.music {
    background: #060606;
}

.music-box {
    display: flex;

    max-width: 850px;

    background: #0d0d0d;

    border: 1px solid #242424;
}

.album {
    width: 320px;
    height: 320px;

    flex-shrink: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    background:
        radial-gradient(
            circle,
            #d00000,
            #570000 35%,
            #080808 70%
        );
}

.album-text {
    font-size: 50px;

    font-weight: 900;

    transform: rotate(-10deg);

    text-shadow:
        4px 4px 0 #000;
}

.music-info {
    padding: 45px;

    flex: 1;
}

.track-label {
    color: #d00000;

    font-size: 10px;

    letter-spacing: 4px;
}

.music-info h3 {
    font-size: 42px;

    margin: 20px 0 5px;
}

.artist-name {
    color: #777;
}

.fake-player {
    display: flex;

    align-items: center;

    gap: 15px;

    margin-top: 55px;
}

.fake-player button {
    width: 45px;
    height: 45px;

    border: none;

    border-radius: 50%;

    background: #d00000;

    color: white;

    cursor: pointer;
}

.player-line {
    flex: 1;

    height: 3px;

    background: #333;
}

#playerProgress {
    width: 0%;

    height: 100%;

    background: #d00000;
}

#playerTime {
    color: #777;

    font-size: 10px;
}

.player-note {
    margin-top: 20px;

    color: #555;

    font-size: 11px;
}


/* ================================
   GALLERY
================================ */

.gallery {
    background: #080808;
}

.gallery-grid {
    display: grid;

    grid-template-columns: 2fr 1fr;

    gap: 12px;
}

.photo {
    min-height: 280px;

    display: flex;

    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            135deg,
            #350000,
            #090909
        );

    border: 1px solid #222;

    transition: 0.4s;
}

.photo span {
    color: #d00000;

    font-size: 45px;

    font-weight: 900;
}

.photo:hover {
    transform: scale(1.02);

    background:
        linear-gradient(
            135deg,
            #700000,
            #090909
        );
}

.photo-one {
    grid-row: span 2;

    min-height: 570px;
}


/* ================================
   EVENTS
================================ */

.events {
    background:
        linear-gradient(
            120deg,
            #050505,
            #150000
        );
}

.event {
    display: flex;

    align-items: center;

    gap: 30px;

    max-width: 900px;

    padding: 30px 0;

    border-bottom: 1px solid #242424;
}

.date {
    width: 70px;

    text-align: center;
}

.date strong {
    display: block;

    color: #d00000;

    font-size: 50px;

    font-weight: 900;
}

.date span {
    font-size: 10px;

    letter-spacing: 3px;
}

.event-details {
    flex: 1;
}

.event-details h3 {
    font-size: 25px;
}

.event-details p {
    margin-top: 7px;

    color: #666;

    font-size: 10px;

    letter-spacing: 3px;
}

.event-link {
    border: 1px solid #444;

    padding: 12px 18px;

    font-size: 10px;

    letter-spacing: 2px;
}

.event-link:hover {
    background: #d00000;

    border-color: #d00000;
}


/* ================================
   CONTACT
================================ */

.contact {
    background:
        radial-gradient(
            circle at center,
            #3d0000,
            #050505 60%
        );
}

.email {
    display: inline-block;

    margin-top: 25px;

    color: #d00000;

    font-size: clamp(25px, 5vw, 65px);

    font-weight: 900;

    border-bottom: 2px solid #d00000;

    word-break: break-word;
}

.socials {
    display: flex;

    gap: 30px;

    margin-top: 60px;

    font-size: 10px;

    letter-spacing: 3px;
}

.socials a:hover {
    color: #d00000;
}


/* ================================
   FOOTER
================================ */

footer {
    min-height: 120px;

    padding: 40px 10%;

    border-top: 1px solid #222;

    display: flex;

    align-items: center;

    justify-content: space-between;
}

.footer-logo {
    font-size: 25px;

    font-weight: 900;

    letter-spacing: 3px;
}

.footer-logo span {
    color: #d00000;
}

footer p {
    color: #555;

    font-size: 9px;

    letter-spacing: 2px;
}


/* ================================
   MOBILE
================================ */

@media (max-width: 700px) {

    .header {
        height: 70px;

        padding: 0 20px;
    }

    .logo {
        font-size: 20px;
    }

    .side-menu {
        width: 100%;

        right: -100%;

        padding: 30px;
    }

    .menu-links a {
        font-size: 35px;
    }

    .hero {
        padding: 100px 25px;
    }

    .hero h1 {
        font-size: 95px;

        letter-spacing: -3px;
    }

    .subtitle {
        letter-spacing: 3px;
    }

    .section {
        padding: 120px 25px 80px;
    }

    .section-label {
        left: 25px;
    }

    .section-content {
        margin-left: 0;
    }

    .music-box {
        flex-direction: column;
    }

    .album {
        width: 100%;
    }

    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .photo-one {
        grid-row: auto;

        min-height: 350px;
    }

    .event {
        gap: 15px;
    }

    .event-link {
        display: none;
    }

    .event-details h3 {
        font-size: 18px;
    }

    .socials {
        flex-direction: column;

        gap: 15px;
    }

    footer {
        flex-direction: column;

        gap: 20px;

        text-align: center;
    }
}
