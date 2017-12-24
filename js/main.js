window.onscroll = function() {scrollFunction()};

var block1H1 = document.getElementById('h1-test')


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        block1H1.style.display = "block";
    } else {
        block1H1.style.display = "none"
    }
}
