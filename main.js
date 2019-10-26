var homebutton = document.getElementById("home-button")
var downloadbutton = document.getElementById("download-button")

var home = document.getElementById("home")
var download = document.getElementById("download")

homebutton.onclick = function () {changeCurrentMenuItem(homebutton);setVisibleSlide(home);}
downloadbutton.onclick = function () {changeCurrentMenuItem(downloadbutton);setVisibleSlide(download);}

function changeCurrentMenuItem(item) {
    homebutton.classList.remove('current')
    downloadbutton.classList.remove('current')

    item.classList.add('current')
}

function setVisibleSlide(slide) {
    home.style.display = "none";
    download.style.display = "none";

    slide.style.display = "block";
}
