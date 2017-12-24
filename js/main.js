window.onscroll = function() {scrollFunction()};

var titlePage = document.getElementById('page1');
var page2 = document.getElementById('page2');
var interval1 = document.getElementById('interval1')

//Page 2 Vars
var bgVid1 = document.getElementById('bgvid1');
var chapt1 = document.getElementById('chapt1');

function entrance(element) {
  element.style.display = "block";
}

function exit(element){
  element.style.display = "none";
}

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        exit(titlePage);
        entrance(page2);
        setTimeout(function() {
          entrance(chapt1);
        }, 1200);

    } else {
        entrance(titlePage);
        exit(page2);
    }
}
