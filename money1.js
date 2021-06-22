function Chuyentien () {
    var Money0 = parseInt( document.getElementById('Money0').value);
    var quocgia = parseInt( document.getElementById('quocgia').value);
    var Money = parseInt( document.getElementById('Money').value);
    var Money0 = Money0*(quocgia/Money);
    document.getElementById('Chuyentien').innerHTML=("Chuyentien: " + Money0) ;
}