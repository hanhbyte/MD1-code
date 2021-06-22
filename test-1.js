    function init () {
     imgObj = document.getElementById('Shiba');
     imgObj.style.position = 'relative';
     imgObj.style.left = '0px';
     imgObj.style.left = '0px';
 }
function moveTrai () {
    imgObj.style.left = parseInt(imgObj.style.left) - 50 + 'px';
}
function movePhai () {
    imgObj.style.left = parseInt(imgObj.style.left) + 50 + 'px';

    }
 window.onload = init;
