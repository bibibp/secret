const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");
const letterHint = document.getElementById("letterHint");

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

async function startMusic() {
  try {
    await music.play();
    isPlaying = true;
    updateMusicButton();
  } catch (error) {
    isPlaying = false;
    updateMusicButton();
  }
}

function updateMusicButton() {
  musicToggle.textContent = isPlaying ? "♫ MUSIK ON" : "♫ MUSIK OFF";
}

openLetter.addEventListener("click", async () => {
  letterModal.classList.remove("hidden");
  letterHint.textContent = "surat telah dibuka ✦";

  // Musik mulai ketika penerima membuka surat.
  if (music.paused) {
    await startMusic();
  }
});

closeLetter.addEventListener("click", () => {
  letterModal.classList.add("hidden");
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    await startMusic();
  } else {
    music.pause();
    isPlaying = false;
    updateMusicButton();
  }
});

letterModal.addEventListener("click", (event) => {
  if (event.target === letterModal) {
    letterModal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    letterModal.classList.add("hidden");
  }
});

music.addEventListener("play", () => {
  isPlaying = true;
  updateMusicButton();
});

music.addEventListener("pause", () => {
  isPlaying = false;
  updateMusicButton();
});