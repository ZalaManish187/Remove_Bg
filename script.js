const videos = [
    "Images/video1.mp4",
    "Images/video2.mp4"
]


let headerImgVideo = document.getElementById("headerImgVideo");
let currentIndex = 0;

setInterval(()=>{
    currentIndex = (currentIndex + 1) % videos.length;
    headerImgVideo.src = videos[currentIndex];
    headerImgVideo.play();
},5000);


