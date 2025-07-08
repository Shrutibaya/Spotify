// DOM elements
const playBtn = document.querySelector('.player-controls img:nth-child(3)');
const progressBar = document.querySelector('.progress-bar');
const currTime = document.querySelector('.curr-time');
const totTime = document.querySelector('.tot-time');
const albumImg = document.querySelector('.album img');
const songName = document.querySelector('.description p:nth-child(1)');
const artistName = document.querySelector('.description p:nth-child(2)');

let isPlaying = false;
let progress = 0;
let duration = 213; // Example: 3 minutes 33 seconds

// Format seconds into mm:ss
function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Simulate play/pause button toggle
playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playBtn.style.opacity = '0.5'; // Just a visual effect
        simulateProgress();
    } else {
        playBtn.style.opacity = '1';
        clearInterval(interval);
    }
});

// Update progress bar manually
progressBar.addEventListener('input', (e) => {
    progress = parseInt(e.target.value);
    currTime.textContent = formatTime(progress * duration / 100);
});

// Simulate song progress
let interval;
function simulateProgress() {
    interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            isPlaying = false;
            playBtn.style.opacity = '1';
            return;
        }
        progress++;
        progressBar.value = progress;
        currTime.textContent = formatTime(Math.floor((progress / 100) * duration));
    }, 1000);
}

// Optional: Change song info (mock function)
function loadSong(songImg, name, artist) {
    albumImg.src = songImg;
    songName.textContent = name;
    artistName.textContent = artist;
    progress = 0;
    progressBar.value = 0;
    currTime.textContent = "00:00";
    totTime.textContent = formatTime(duration);
    isPlaying = false;
    playBtn.style.opacity = '1';
    clearInterval(interval);
}

// Example of song switch (you can trigger this on click)
loadSong("card3img.jpeg", "Kesariya", "Arijit Singh");

