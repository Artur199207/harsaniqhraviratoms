document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Փորձում ենք նվագարկել, եթե բրաուզերը թույլ է տալիս
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Երաժշտությունը նվագարկվում է 🎵");
        }).catch(error => {
            console.log("Autoplay չի թույլատրվում, սպասում ենք user interaction:", error);
        });
    }
});
