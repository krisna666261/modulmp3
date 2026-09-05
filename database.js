// File: database.js
// Anda bisa mengetik bookmark manual di sini

const preloadedBookmarks = {
    // Format ID untuk lagu dari Library: "LIB_" + id
    "LIB_1": [
    {
      "id": 101,
      "label": "Tinjauan TI",
      "time": 21
    },
    {
      "id": 102,
      "label": "Perkembangan TI",
      "time": 475
    },
    {
      "id": 103,
      "label": "Sejarah TI Era Modern",
      "time": 509
    },
    {
      "id": 104,
      "label": "Sejarah TI Indonesia",
      "time": 740
    }
  ],
    // Format ID untuk lagu dari komputer: "LOCAL_" + nama_file (spasi diganti underscore)
    "LOCAL_Podcast_Episode_10.mp3": [
        { "id": 201, "label": "Sponsor", "time": 45.0 },
        { "id": 202, "label": "Topik Utama", "time": 120.5 }
    ]
};
