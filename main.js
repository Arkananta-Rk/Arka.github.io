// Efek glowing saat tombol diarahkan mouse
const neonBtn = document.querySelector(".neon-btn");

if (neonBtn) {
    neonBtn.addEventListener("mouseenter", () => {
        neonBtn.style.boxShadow = "0 0 25px #ff00d4, 0 0 50px #ff00d4";
    });

    neonBtn.addEventListener("mouseleave", () => {
        neonBtn.style.boxShadow = "0 0 10px #ff00d4, 0 0 25px #ff00d4";
    });
}

// Animasi warna berjalan untuk paragraf (lebih smooth)
const rainbowText = document.querySelectorAll(".rainbow-text");

rainbowText.forEach((el) => {
    let hue = 0;
    setInterval(() => {
        hue = (hue + 2) % 360;
        el.style.color = `hsl(${hue}, 100%, 60%)`;
    }, 80);
}