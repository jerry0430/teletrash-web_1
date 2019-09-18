var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
$('.date-input').val(today);

const popup = document.getElementById('cover-popup')
function clickItem(){
    popup.style.display = 'block'
}
function closePopup(){    
    popup.style.display = 'none'
}