// multilanguage support
var system_lang = navigator.language;

if (system_lang != 'en-US') {
    changeLanguage(system_lang)
}

function changeLanguage(lang) {
    if (lang == "fa-IR") {
        var rtl_style = document.getElementById("rtl")
        if (rtl_style) {
            rtl_style.href = "rtl.css";
        } else {
            var head =  document.getElementsByTagName('head')[0];
            var rtl_style = document.createElement('link'); 
            rtl_style.rel = 'stylesheet';
            rtl_style.type = 'text/css';
            rtl_style.href = 'rtl.css';
            rtl_style.id = 'rtl';
            head.appendChild(rtl_style);
        }
    } else {
        var rtl_style = document.getElementById("rtl");
        if (rtl_style) {
            rtl_style.href = "";
        }
    }
}

// main menu
var homebutton = document.getElementById("home-button");
var downloadbutton = document.getElementById("download-button");

var home = document.getElementById("home");
var download = document.getElementById("download");

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
