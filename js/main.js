window.onscroll = function() {scrollFunction()};

var titlePage = document.getElementById('page1');
var subTitle1 = document.getElementById('p1Subtitle');

//Page 2 Vars
var page2 = document.getElementById('page2');

//Page 3 Vars
var bgVid1 = document.getElementById('bgvid1');
var chapt1 = document.getElementById('chapt1');

function entrance(element) {
  element.style.display = "block";
}

function exit(element){
  element.style.display = "none";
}

function subTitles(sub){
  setTimeout(function(){
    sub.className = "fadeIn";
    sub.style.display = "block";
  }, 2000);
}

subTitles(subTitle1);

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        exit(titlePage);
        exit(subTitle1);
        entrance(page2);
        setTimeout(function() {
          entrance(chapt1);
        }, 1200);

    } else {
        entrance(titlePage);
        exit(page2);
        subTitles(subTitle1);
    }
}
