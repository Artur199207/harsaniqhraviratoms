document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Սկսել 0-ից, եթե reload է լինում
    audio.currentTime = 0;

    // Autoplay-ի թույլտվություն
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("🎵 Երաժշտությունը նվագարկվում է 0-ից");
        }).catch(error => {
            console.log("❌ Autoplay չի թույլատրվում, սպասում ենք user interaction:", error);
            
            // Օգտատիրոջը թույլ տալ սեղմել էկրանի վրա, որ նվագարկի
            document.addEventListener("click", () => {
                audio.play();
                console.log("🎶 User interaction - նվագարկումը սկսվեց");
            }, { once: true });
        });
    }
});