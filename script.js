// ==========================================
// 1. DATA PLAYLIST DROPBOX
// ==========================================
// Untuk menambah lagu baru, tambahkan objek baru ke dalam array playlist di bawah ini.
// Pastikan parameter di ujung URL Dropbox menggunakan `dl=1` agar dapat di-stream langsung.

const playlist = [
    { 
        id: 1, 
        title: "EMBS432101 - Modul 1", 
        url: "https://www.dropbox.com/scl/fi/953yq1cvztw88maidnwd8/EMBS432101-Modul-1.mp3?rlkey=2ww1aca0oi435a1jvncapwk9f&st=bi8hynw2&dl=1", 
        duration: "1:14:03" 
    },
    { 
        id: 2, 
        title: "MISM420302 - Modul 1", 
        url: "https://www.dropbox.com/scl/fi/s5p2l54wl4tq55szuefyg/MISM420302-Modul-1.mp3?rlkey=tcpkv29dtemyexztxuerjmzfs&st=bhbovii7&dl=1", 
        duration: "27:18" 
    }
];

// ==========================================
// 2. ELEMEN HTML & VARIABEL GLOBAL
// ==========================================
const audioPlayer = document.getElementById('audioPlayer');
const nowPlayingText = document.getElementById('now-playing');
const mp3ListContainer = document.getElementById('mp3-list');

let currentTrackIndex = -1;

// ==========================================
// 3. LOGIKA MERENDER DAN MEMUTAR PLAYLIST
// ==========================================

function renderPlaylist() {
    mp3ListContainer.innerHTML = '';

    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.className = 'playlist-item';
        li.dataset.index = index;
        li.innerHTML = `
            <span class="song-title">${track.title}</span>
            <span class="song-duration">${track.duration}</span>
        `;

        li.addEventListener('click', () => {
            playTrack(index);
        });

        mp3ListContainer.appendChild(li);
    });
}

function playTrack(index) {
    if (index < 0 || index >= playlist.length) return;

    currentTrackIndex = index;
    const track = playlist[index];

    audioPlayer.src = track.url;
    audioPlayer.play().catch(e => console.log("Menunggu interaksi pengguna:", e));
    nowPlayingText.innerText = `Sedang diputar: ${track.title}`;

    // Memperbarui status aktif pada antarmuka playlist
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ==========================================
// 4. OTOMATIS MEMUTAR LAGU BERIKUTNYA
// ==========================================
audioPlayer.addEventListener('ended', function() {
    let nextIndex = currentTrackIndex + 1;
    if (nextIndex < playlist.length) {
        playTrack(nextIndex);
    }
});

// Memuat daftar playlist setelah dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', renderPlaylist);
