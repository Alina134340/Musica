document.addEventListener("DOMContentLoaded", function() {
    // En index.html (Interfaz de Inicio)
    const playButton = document.getElementById("playButton");
    if (playButton) {
        playButton.addEventListener("click", function() {
            window.location.href = "galeria.html";  // Redirige a la galería de playlists
        });
    }

    // En galeria.html (Interfaz de Galería de Playlist)
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const btn4 = document.getElementById("btn4");
    const btn5 = document.getElementById("btn5");
    const btn6 = document.getElementById("btn6");
    const btn7 = document.getElementById("btn7");
    const btn8 = document.getElementById("btn8");

    if (btn1) {
        btn1.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=kPa7bsKwL-c&list=RDQMHuXU6C3OH0g&index=18";  // Playlist de POP
        });
    }
    
    if (btn2) {
        btn2.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=BRuHGchMrD8&list=PLIYb7zHjOlLe9ItO6qstCvmUm9MGjGmw6";  // Playlist de Rock en Español
        });
    }

    if (btn3) {
        btn3.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=atxYe-nOa9w&list=RDQMEptyS_qihMs&start_radio=1";  // Playlist de Anime
        });
    }

    if (btn4) {
        btn4.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=Amq-qlqbjYA&list=PLbxr0tBuEEpF1PFiDIwUkdDR5dsfx1ZUr";  // Playlist de KPOP
        });
    }

    if (btn5) {
        btn5.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=8tJARBd3ELE&list=RDQMl1HN5ZL8B90&start_radio=1";  // Playlist de Reggaeton
        });
    }

    if (btn6) {
        btn6.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=-uI3TLSNp6c&list=PLgaFNC_I_Zkm7T250PkSc4WoMvDgqtYFS";  // Playlist de Baladas
        });
    }

    if (btn7) {
        btn7.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=W0yp3rSfx3I&list=RDQMrYeqFmjnu4k&start_radio=1";  // Playlist de Trap Argentino
        });
    }

    if (btn8) {
        btn8.addEventListener("click", function() {
            window.location.href = "https://www.youtube.com/watch?v=NY__VTIUsiU&list=RDEMA703AE9PNaNYb3T-XAhR9g";  // Playlist de Hatsune Miku
        });
    }
});
