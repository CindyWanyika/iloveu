const sr = ScrollReveal({ distance: "50px", origin: "left", duration: 1500 });

const srTop = ScrollReveal({ distance: "50px", origin: "top", duration: 500 });

const srBottom = ScrollReveal({ distance: "50px", origin: "bottom", duration: 5500 });

const srRight = ScrollReveal({ distance: "50px", origin: "right", duration: 1500 });

sr.reveal(".home-content h1", { delay: 500 });
sr.reveal(".home-content p", { delay: 700 });

console.log("Initializing confetti effect...");

// Automatically launch confetti when the script loads
launchConfetti();

// Function to launch confetti
function launchConfetti() {
    var duration = 3000; // How long confetti should appear (in ms)
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 20,
            spread: 50,
            origin: { x: Math.random(), y: Math.random() - 0.2 } // Confetti from random spots
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

srRight.reveal(".v2", { delay: 1000 });


srBottom.reveal(".horizontal-scroll-wrapper",{delay: 1000})




        