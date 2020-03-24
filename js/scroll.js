let button = document.querySelector(".scroll")
button.addEventListener('click', goToTop)

function goToTop() {
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
}
window.onscroll=function () {showTopButton()}
function showTopButton() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display="block"
    }
    else {
        button.style.display="none"
    }
}

