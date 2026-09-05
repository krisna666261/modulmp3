// File: database.js
// Anda bisa mengetik bookmark manual di sini

const preloadedBookmarks = {
    // Format ID untuk lagu dari Library: "LIB_" + id
    "LIB_lagu_1": [
        { "id": 101, "label": "Intro Klasik", "time": 12.5 },
        { "id": 102, "label": "Klimaks Biola", "time": 180.0 }
    ],
    // Format ID untuk lagu dari komputer: "LOCAL_" + nama_file (spasi diganti underscore)
    "LOCAL_Podcast_Episode_10.mp3": [
        { "id": 201, "label": "Sponsor", "time": 45.0 },
        { "id": 202, "label": "Topik Utama", "time": 120.5 }
    ]
};