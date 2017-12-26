jQuery(document).ready(function($) {

var titlePage = document.getElementById('page1');
var subTitle1 = document.getElementById('p1Subtitle');
var cta1 = document.getElementById('ctaP1');

//Page 2 Vars
var page2 = document.getElementById('page2');
var title2 = document.getElementById('pageTitle2');
var list2 = document.getElementById('listP2');
var point2 = document.getElementById('pointerP2');
var nav2 = document.getElementById('nav-menu');
var ourMenu = document.getElementById('menu-btn');
var ourStory = document.getElementById('our-story-btn');

//Page 3 Vars
var page3 = document.getElementById('page3');
var bgVid1 = document.getElementById('bgvid1');
var chapt1 = document.getElementById('chapt1');

function entrance(element) {
  element.style.display = "block";
}

function exit(element){
  element.style.display = "none";
}

function closeP1(){
  exit(titlePage);
  exit(subTitle1);
  exit(cta1);
}

function openP1(){
  entrance(titlePage);
  entrance(subTitle1);
  subTitles(cta1,2000);
}

function closeP2(){
  exit(page2);
  exit(title2);
  exit(list2);
  exit(point2);
  exit(nav2);
}

function openP2(){
  entrance(page2);
  setTimeout(function(){
    entrance(title2);
  }, 1000);
  setTimeout(function(){
  entrance(list2);
  entrance(nav2);
}, 3000);
  setTimeout(function(){
    entrance(point2);
  }, 4000);
}

function closeP3() {
  exit(page3);
  exit(chapt1);
}

function openP3(){
  entrance(page3);
  setTimeout(function() {
    entrance(chapt1);
  }, 1200);
}

function subTitles(sub, interval){
  setTimeout(function(){
    sub.style.display = "block";
  }, interval);
}

subTitles(subTitle1, 1000);
subTitles(cta1, 2000);

function navigateStory(){
  closeP2();
  openP3();
}

ourStory.addEventListener("click", navigateStory);
point2.addEventListener("click", navigateStory);

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
      closeP2();
      openP3();
    }
    else if (scroll >= 150) {
      closeP1();
      closeP3();
      openP2();
    }
    else {
        closeP2();
        openP1();
    }
});

});
