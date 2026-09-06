// ==========================================
// 1. DATA MULTI-PLAYLIST DROPBOX
// ==========================================
const playlistsData = {
    "MSIM420102 – Sistem Operasi Modul 1": [
        { 
            id: 1, 
            title: "KB1.1.Pengantar", 
            url: "https://www.dropbox.com/scl/fi/9shc3li31stqevdtzqrkm/KB1.1.Pengantar.mp3?rlkey=32mp9ggk5xqc9mo25vzfe96jd&st=15ecdzpz&dl=1", 
            duration: "02:46" 
        },
        { 
            id: 2, 
            title: "KB1.2.OS Menurut Anderson & Dahlin", 
            url: "https://www.dropbox.com/scl/fi/omx79dscu248p0xoy7uc0/KB1.2.OS-Menurut-Anderson-Dahlin.mp3?rlkey=l98cwex8qj3xfhuv1pbso5q9t&st=e84z76np&dl=1", 
            duration: "04:41" 
        },
        { 
            id: 3, 
            title: "KB1.3.Tujuan OS", 
            url: "https://www.dropbox.com/scl/fi/ftvdddc3lg01fcaid1g4c/KB1.3.Tujuan-OS.mp3?rlkey=f0p59isbj0t3otlb9rquhgqx4&st=h25g11wi&dl=1", 
            duration: "00:26" 
        },
        { 
            id: 4, 
            title: "KB2.1.Perkembangan OS", 
            url: "https://www.dropbox.com/scl/fi/ewd4kiuz9cru9il88pknn/KB2.1.Perkembangan-OS.mp3?rlkey=5ov52xo6hv7d6r70r8k8uls4p&st=5ctblq86&dl=1", 
            duration: "02:57" 
        },
        { 
            id: 5, 
            title: "KB2.2.Sistem Awal - Serial Processing", 
            url: "https://www.dropbox.com/scl/fi/sxb5t3h89pd0bmefdx45j/KB2.2.Sistem-Awal-Serial-Processing.mp3?rlkey=aaiw1n9nch3qqcvbptmygkdb1&st=5cngyon4&dl=1", 
            duration: "01:35" 
        },
        { 
            id: 6, 
            title: "KB2.3.Sistem Batch Sederhana", 
            url: "https://www.dropbox.com/scl/fi/yb5mfcuu68xcmzqyt6fjv/KB2.3.Sistem-Batch-Sederhana.mp3?rlkey=ern43plr7kql6tz5o1em1ylro&st=tama1tw3&dl=1", 
            duration: "03:46" 
        },
        { 
            id: 7, 
            title: "KB2.4.Sistem Multiprogramming", 
            url: "https://www.dropbox.com/scl/fi/8b6qzpscsaxf8v69n04z9/KB2.4.Sistem-Multiprogramming.mp3?rlkey=m2oa0zjbb24xxudqtnlh5bbyt&st=mo7doyfn&dl=1", 
            duration: "00:58" 
        },
        { 
            id: 8, 
            title: "KB2.5.Sistem Time-Sharing", 
            url: "https://www.dropbox.com/scl/fi/imo2ssvv6kll30wqcirqt/KB2.5.Sistem-Time-Sharing.mp3?rlkey=kxpdb8o45ao0g7v7t1summ5r3&st=buxjar95&dl=1", 
            duration: "00:59" 
        },
        { 
            id: 9, 
            title: "KB2.6.Sistem Multiprocessing", 
            url: "https://www.dropbox.com/scl/fi/y0em47ryu6zk298pfcivb/KB2.6.Sistem-Multiprocessing.mp3?rlkey=6r6l2fmqcsi1j5d8op9ruvubx&st=a0i2q6s9&dl=1", 
            duration: "00:51" 
        },
        { 
            id: 10, 
            title: "KB2.7.Sistem Personal Computer", 
            url: "https://www.dropbox.com/scl/fi/p2dw1k9h6qhsvx8o78l3f/KB2.7.Sistem-Personal-Computer.mp3?rlkey=vc6qav90j27ohg8jqojraoyfi&st=b42j9yce&dl=1", 
            duration: "00:51" 
        },
        { 
            id: 11, 
            title: "KB2.8.Sistem Paralel", 
            url: "https://www.dropbox.com/scl/fi/fwax5cpzrhvqjlgip2q0q/KB2.8.Sistem-Paralel.mp3?rlkey=um18y04txu2w258cqrxdygdwp&st=7m3ws77t&dl=1", 
            duration: "01:34" 
        },
        { 
            id: 12, 
            title: "KB2.9.Sistem Terdistribusi", 
            url: "https://www.dropbox.com/scl/fi/ohrpydlcvev0honvdgk08/KB2.9.Sistem-Terdistribusi.mp3?rlkey=om3aknc4wraa8zwt1i3twcfg9&st=9ssuaweb&dl=1", 
            duration: "01:09" 
        },
        { 
            id: 13, 
            title: "KB2.10.Sistem Real Time", 
            url: "https://www.dropbox.com/scl/fi/73p1nb6r16jqokrjo0tx8/KB2.10.Sistem-Real-Time.mp3?rlkey=45u1vk98461aaxu6ulvhlxy1u&st=mw0ryng0&dl=1", 
            duration: "01:19" 
        },
        { 
            id: 14, 
            title: "KB2.11.Mobile Computing", 
            url: "https://www.dropbox.com/scl/fi/it8ck3a7udyvarrk1ogzy/KB2.11.Mobile-Computing.mp3?rlkey=3p234clreizcmw8802lxmy6z0&st=gvv79utl&dl=1", 
            duration: "03:56" 
        }
    ],
    "MISM420302 - Algoritma & Pemrograman - Modul 1": [
        { 
            id: 1, 
            title: "All KB", 
            url: "https://www.dropbox.com/scl/fi/a4lvqt3kezdnsvmtalsrj/MISM420302-Modul-1.mp3?rlkey=t3ua7yl8hh8k93mhyzlfrhn0l&st=8t9xdu19&dl=1", 
            duration: "27:18" 
        }
    ],
    "EMBS432101 - Sistem Informasi Manajemen - Modul 1": [
        { 
            id: 1, 
            title: "All KB", 
            url: "https://www.dropbox.com/scl/fi/di22mkv7xu9u2w2unvw9a/EMBS432101-Modul-1.mp3?rlkey=3z3134rvw8lojltrit6ntde96&st=qzxd8rml&dl=1", 
            duration: "01:14:03" 
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
