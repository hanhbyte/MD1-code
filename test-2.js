function upArrowPressed() {
    let element = document.getElementById("Shiba");
    element.style.top = parseInt(element.style.top) - 50 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("Shiba");
    element.style.top = parseInt(element.style.top) + 50 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("Shiba");
    element.style.left = parseInt(element.style.left) - 50 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("Shiba");
    element.style.left = parseInt(element.style.left) + 50 + 'px';

}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 65:
            leftArrowPressed();
            break;
        case 68:
            rightArrowPressed();
            break;
         case 87:
             upArrowPressed();
             break;
        case 83:
            downArrowPressed();
            break;
     }
}
 function docReady() {
    window.addEventListener('keydown', moveSelection);
 }