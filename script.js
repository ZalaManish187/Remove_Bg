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



var ImgBox = document.querySelector(".img-Box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var linearrow = document.getElementById("linearrow");




originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var boxwidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxwidth;
    linearrow.style.left = boxwidth;
}

