document.body.onload = function () {

setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('disable')) {
        preloader.classList.add('disable')
    }},1000)
}

