import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Hidden Structure",
      artist: "Leavv, Flitz&Suppe",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#E3EBB2", "#CF9162"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
    },

    {
      name: "Faces",
      artist: "Knowmadic",
      id: uuidv4(),
      active: false,
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/c50f86fb7696e5c5747e0fa2ada4fcbc2501fea7-1024x1024.jpg",
      color: ["#F3FCCD", "#AC8A85"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10315",
    },
    {
      name: "Habitat",
      artist: "Philanthrope, chromonicci",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#503527", "#C57F54"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10265",
    },
    {
      name: "Plants",
      artist: "Philanthrope, Ian Ewing, Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#503527", "#C57F54"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10255",
    },

    {
      name: "Stay.",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ccad9b1271d1a9701f84380bb217da7d923a6c4f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#995C61", "#C27470"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7998",
    },
    {
      name: "The Dream",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ccad9b1271d1a9701f84380bb217da7d923a6c4f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#995C61", "#C27470"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8001",
    },
    {
      name: "Rest Until Dark",
      artist: " Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#272544", "#273657"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
    },
  ];
}

export default chillHop;
