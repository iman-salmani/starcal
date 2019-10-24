var homebutton = document.getElementById("home-button")
var downloadbutton = document.getElementById("download-button")

var home = document.getElementById("home")
var download = document.getElementById("download")

homebutton.onclick = function () {setVisibleSlide(home);}
downloadbutton.onclick = function () {setVisibleSlide(download);}

function setVisibleSlide(slide) {
    home.style.display = "none";
    download.style.display = "none";

    slide.style.display = "block";
}