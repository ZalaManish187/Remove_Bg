const videos = [
  "Images/video1.mp4",
  "Images/video2.mp4"
];

let headerImgVideo = document.getElementById("headerImgVideo");
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % videos.length;
  headerImgVideo.style.transition = "opacity 1s ease";
  headerImgVideo.style.opacity = 0;

  setTimeout(() => {
    headerImgVideo.src = videos[currentIndex];
    headerImgVideo.load();
    headerImgVideo.play();
    headerImgVideo.style.opacity = 1;
  }, 1000); 
}, 10000); 