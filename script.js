// ==========================================
// 1. DATA MULTI-PLAYLIST DROPBOX
// ==========================================
const playlistsData = {
    "Modul EMBS432101": [
        { 
            id: 1, 
            title: "EMBS432101 - Modul 1", 
            url: "https://www.dropbox.com/scl/fi/953yq1cvztw88maidnwd8/EMBS432101-Modul-1.mp3?rlkey=2ww1aca0oi435a1jvncapwk9f&st=bi8hynw2&dl=1", 
            duration: "1:14:03" 
        },
        { 
            id: 2, 
            title: "EMBS432101 - Modul 2", 
            url: "URL_DROPBOX_MODUL_2_DI_SINI?dl=1", 
            duration: "45:10" 
        }
    ],
    "Modul MISM420302": [
        { 
            id: 1, 
            title: "MISM420302 - Modul 1", 
            url: "https://www.dropbox.com/scl/fi/s5p2l54wl4tq55szuefyg/MISM420302-Modul-1.mp3?rlkey=tcpkv29dtemyexztxuerjmzfs&st=bhbovii7&dl=1", 
            duration: "27:18" 
        }
    ]
};

// ==========================================
// 2. ELEMEN HTML & VARIABEL GLOBAL
// ==========================================
const audioPlayer = document.getElementById('audioPlayer');
const nowPlayingText = document.getElementById('now-playing');
const mp3ListContainer = document.getElementById('mp3-list');
const playlistSelect = document.getElementById('playlistSelect');

let currentPlaylistKey = Object.keys(playlistsData)[0]; // Default ke playlist pertama
let currentTrackIndex = -1;

// ==========================================
// 3. LOGIKA MERENDER PLAYLIST & DROPDOWN
// ==========================================

// Inisialisasi dropdown pilihan playlist
function initPlaylistDropdown() {
    playlistSelect.innerHTML = '';
    Object.keys(playlistsData).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        playlistSelect.appendChild(option);
    });

    // Event ketika pengguna mengganti pilihan playlist
    playlistSelect.addEventListener('change', (e) => {
        currentPlaylistKey = e.target.value;
        currentTrackIndex = -1; // Reset indeks lagu saat berpindah playlist
        renderPlaylist();
    });
}

function renderPlaylist() {
    mp3ListContainer.innerHTML = '';
    const currentList = playlistsData[currentPlaylistKey] || [];

    currentList.forEach((track, index) => {
        const li = document.createElement('li');
        li.className = 'playlist-item';
        if (index === currentTrackIndex) {
            li.classList.add('active');
        }

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
    const currentList = playlistsData[currentPlaylistKey];
    if (!currentList || index < 0 || index >= currentList.length) return;

    currentTrackIndex = index;
    const track = currentList[index];

    audioPlayer.src = track.url;
    audioPlayer.play().catch(e => console.log("Menunggu interaksi pengguna:", e));
    nowPlayingText.innerText = `Sedang diputar: ${track.title}`;

    renderPlaylist();
}

// ==========================================
// 4. OTOMATIS MEMUTAR LAGU BERIKUTNYA
// ==========================================
audioPlayer.addEventListener('ended', function() {
    const currentList = playlistsData[currentPlaylistKey];
    let nextIndex = currentTrackIndex + 1;
    if (currentList && nextIndex < currentList.length) {
        playTrack(nextIndex);
    }
});

// Memuat data saat halaman selesai dibuka
document.addEventListener('DOMContentLoaded', () => {
    initPlaylistDropdown();
    renderPlaylist();
});
