// ==========================================
// 1. DATA DAN VARIABEL GLOBAL
// ==========================================

// Simulasi Data Library MP3 (Pada aplikasi nyata, data ini bisa dari server)
const uploadedMp3s = [
    { 
        id: 1, 
        title: "EMBS432101 - Modul 1", 
        // Ganti bagian url di bawah ini dengan Direct Link yang baru Anda rakit
        url: "https://www.dropbox.com/scl/fi/953yq1cvztw88maidnwd8/EMBS432101-Modul-1.mp3?rlkey=2ww1aca0oi435a1jvncapwk9f&st=bi8hynw2&dl=1", 
        duration: "1:14:03" // Ubah durasi sesuai lagu Anda (hanya untuk tampilan visual)
    },
    // Jika Anda punya lagu kedua di folder tersebut, ulangi langkah 2-4 dan tambahkan di sini:
    { 
        id: 2, 
        title: "MISM420302 - Modul 1", 
        url: "https://www.dropbox.com/scl/fi/s5p2l54wl4tq55szuefyg/MISM420302-Modul-1.mp3?rlkey=tcpkv29dtemyexztxuerjmzfs&st=bhbovii7&dl=1", 
        duration: "27:18" 
    }
];

const audioPlayer = document.getElementById('audioPlayer');
const audioFile = document.getElementById('audioFile');
const nowPlayingText = document.getElementById('now-playing');
const mp3ListContainer = document.getElementById('mp3-list');
const daftarBookmark = document.getElementById('daftarBookmark');
const btnBookmark = document.getElementById('btn-bookmark');

let currentSongId = null; 

// ==========================================
// 2. LOGIKA DATABASE JSON & MIGRASI DATA
// ==========================================

const DB_KEY = "APP_MP3_BOOKMARKS";

function getDatabase() {
    const data = localStorage.getItem(DB_KEY);
    let db = {};
    
    if (data) {
        db = JSON.parse(data);
    }

    // INJEKSI DATA MANUAL:
    // Cek apakah file database.js ada dan memuat variabel preloadedBookmarks
    if (typeof preloadedBookmarks !== 'undefined') {
        for (let songId in preloadedBookmarks) {
            // Jika di memori lokal belum ada data untuk lagu ini,
            // tarik data dari file database.js yang Anda ketik manual.
            if (!db[songId] || db[songId].length === 0) {
                db[songId] = preloadedBookmarks[songId];
            }
        }
    }

    // Sistem migrasi (dari angka ke objek) tetap dibiarkan...
    for (let song in db) {
        db[song] = db[song].map((item, index) => {
            if (typeof item === 'number') {
                return { id: Date.now() + index, label: `Penanda ${index + 1}`, time: item };
            }
            return item;
        });
    }
    return db;
}

function saveDatabase(dbObject) {
    localStorage.setItem(DB_KEY, JSON.stringify(dbObject));
}

// ==========================================
// 3. LOGIKA MERENDER DAN MENGELOLA BOOKMARK
// ==========================================

function formatWaktu(totalDetik) {
    const menit = Math.floor(totalDetik / 60);
    const detik = Math.floor(totalDetik % 60);
    const menitStr = menit < 10 ? "0" + menit : menit;
    const detikStr = detik < 10 ? "0" + detik : detik;
    return menitStr + ":" + detikStr;
}

function renderBookmarks() {
    daftarBookmark.innerHTML = ""; 

    if (!currentSongId) {
        daftarBookmark.innerHTML = '<li class="empty-text">Pilih lagu terlebih dahulu.</li>';
        return;
    }

    const db = getDatabase();
    const songBookmarks = db[currentSongId] || [];

    if (songBookmarks.length === 0) {
        daftarBookmark.innerHTML = '<li class="empty-text">Belum ada penanda untuk lagu ini.</li>';
        return;
    }

    // Render setiap bookmark
    songBookmarks.forEach((bookmark) => {
        const li = document.createElement('li');
        const waktuTeks = formatWaktu(bookmark.time);
        
        // Membangun struktur HTML untuk setiap item bookmark
        li.innerHTML = `
            <div class="bookmark-info">
                <span class="bookmark-name">${bookmark.label}</span>
                <span class="bookmark-time-text">Waktu: ${waktuTeks}</span>
            </div>
            <div class="bookmark-actions">
                <button class="action-btn btn-play-small" title="Putar">▶</button>
                <button class="action-btn btn-edit-small" title="Ubah Nama">✏️</button>
                <button class="action-btn btn-delete-small" title="Hapus">🗑️</button>
            </div>
        `;

        // 1. Logika Tombol Play (Putar)
        const btnPlay = li.querySelector('.btn-play-small');
        btnPlay.onclick = function() {
            audioPlayer.currentTime = bookmark.time;
            audioPlayer.play();
        };

        // 2. Logika Tombol Edit (Ubah Nama)
        const btnEdit = li.querySelector('.btn-edit-small');
        btnEdit.onclick = function() {
            const namaBaru = prompt("Masukkan nama baru untuk penanda ini:", bookmark.label);
            // Jika user tidak klik Cancel dan tidak mengosongkan nama
            if (namaBaru !== null && namaBaru.trim() !== "") {
                updateBookmarkName(bookmark.id, namaBaru);
            }
        };

        // 3. Logika Tombol Delete (Hapus)
        const btnDelete = li.querySelector('.btn-delete-small');
        btnDelete.onclick = function() {
            const konfirmasi = confirm(`Apakah Anda yakin ingin menghapus penanda "${bookmark.label}"?`);
            if (konfirmasi) {
                deleteBookmark(bookmark.id);
            }
        };

        daftarBookmark.appendChild(li);
    });
}

// Fungsi Backend: Menghapus bookmark berdasarkan ID
function deleteBookmark(bookmarkId) {
    const db = getDatabase();
    // Gunakan filter untuk membuang ID yang dipilih dari array
    db[currentSongId] = db[currentSongId].filter(item => item.id !== bookmarkId);
    saveDatabase(db);
    renderBookmarks(); // Refresh layar
}

// Fungsi Backend: Mengubah nama bookmark berdasarkan ID
function updateBookmarkName(bookmarkId, newName) {
    const db = getDatabase();
    // Cari index bookmark yang ingin diedit
    const index = db[currentSongId].findIndex(item => item.id === bookmarkId);
    if (index !== -1) {
        db[currentSongId][index].label = newName;
        saveDatabase(db);
        renderBookmarks(); // Refresh layar
    }
}

// Event saat tombol utama "Tandai Posisi Saat Ini" ditekan
btnBookmark.addEventListener('click', function() {
    if (!currentSongId || !audioPlayer.src || audioPlayer.src.includes(window.location.href)) {
        alert("Silakan putar lagu terlebih dahulu!");
        return;
    }

    const waktuSaatIni = audioPlayer.currentTime;
    
    // Minta input nama dari user saat membuat penanda baru
    let namaPenanda = prompt("Beri nama bagian ini (misal: Intro, Reff, dll):", "Penanda Baru");
    
    // Jika user klik tombol 'Cancel' pada pop-up, batalkan pembuatan penanda
    if (namaPenanda === null) return; 
    
    // Jika dikosongkan, beri nama default
    if (namaPenanda.trim() === "") namaPenanda = "Penanda Tanpa Nama";

    const db = getDatabase();
    if (!db[currentSongId]) {
        db[currentSongId] = [];
    }
    
    // Buat Objek Data Baru
    const newBookmark = {
        id: Date.now(), // Generate ID unik berdasarkan timestamp milidetik
        label: namaPenanda,
        time: waktuSaatIni
    };
    
    db[currentSongId].push(newBookmark);
    
    // Urutkan array berdasarkan properti 'time' (waktu terjadinya) dari kecil ke besar
    db[currentSongId].sort((a, b) => a.time - b.time);
    
    saveDatabase(db);
    renderBookmarks();
});

// ==========================================
// 4. LOGIKA PEMUTAR LAGU (LIBRARY & LOKAL)
// ==========================================

function renderLibrary() {
    mp3ListContainer.innerHTML = '';
    uploadedMp3s.forEach((track, index) => {
        const li = document.createElement('li');
        li.className = 'playlist-item';
        li.dataset.index = index;
        li.innerHTML = `<span class="song-title">${track.title}</span><span class="song-duration">${track.duration}</span>`;

        li.addEventListener('click', () => {
            playTrackFromLibrary(track, li);
        });
        mp3ListContainer.appendChild(li);
    });
}

function playTrackFromLibrary(track, clickedElement) {
    audioPlayer.src = track.url;
    audioPlayer.play().catch(e => console.log("Menunggu interaksi user:", e));
    nowPlayingText.innerText = `Sedang diputar: ${track.title}`;
    
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    if (clickedElement) clickedElement.classList.add('active');

    currentSongId = "LIB_" + track.id;
    renderBookmarks();
}

audioFile.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.play();
        nowPlayingText.innerText = `Sedang diputar: ${file.name}`;
        
        currentSongId = "LOCAL_" + file.name.replace(/\s+/g, '_');
        renderBookmarks();
    }
});

// ==========================================
// FITUR EXPORT & IMPORT JSON
// ==========================================

// Logika DOWNLOAD (Export)
document.getElementById('btn-export').addEventListener('click', function() {
    const db = getDatabase();
    // Ubah JSON menjadi teks dengan format rapi (indentasi 2 spasi)
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
    
    // Buat elemen <a> fiktif untuk memicu download browser
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "bookmark_audio_saya.json");
    document.body.appendChild(downloadAnchorNode); // Wajib untuk Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});

// Logika UPLOAD (Import)
document.getElementById('file-import').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            // Baca isi file yang diupload
            const isiFile = e.target.result;
            const importedData = JSON.parse(isiFile);
            
            // Konfirmasi keamanan
            if (confirm("Apakah Anda yakin ingin menimpa database saat ini dengan file ini?")) {
                saveDatabase(importedData);
                alert("Database berhasil diimpor!");
                renderBookmarks(); // Refresh tampilan
            }
        } catch (error) {
            alert("Gagal membaca file. Pastikan format file tersebut adalah JSON yang valid.");
            console.error(error);
        }
    };
    // Perintahkan reader membaca file sebagai teks
    reader.readAsText(file);
    
    // Kosongkan input agar bisa mengupload file yang sama lagi jika diperlukan
    event.target.value = ""; 
});

document.addEventListener('DOMContentLoaded', renderLibrary);