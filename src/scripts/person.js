var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
$('#date-input').val(today);
let lastClickEle = null
let clickStatus = false

function clickLocation(ele){
    const popup = document.getElementById('pop-up')

    if(lastClickEle === ele){
        clickStatus = !clickStatus
    } else {
        if(lastClickEle) lastClickEle.classList.remove("active")
        clickStatus = true
        lastClickEle = ele
    }
    
    if(clickStatus){
        ele.classList.add("active")
        const buttonPos = getPosition(ele)
        const contenter = document.getElementsByClassName('main__detail__content')[0]
        const contenterPos = getPosition(contenter)
        const popupPos = `${buttonPos.y - contenterPos.y + 42}px`
        popup.style.opacity = '1'
        popup.style.zIndex = '9'
        popup.style.top = popupPos
    } else {
        ele.classList.remove("active")
        popup.style.opacity = '0'
        popup.style.zIndex = '-1'
    }
}
function getPosition (element) {
    var x = 0;
    var y = 0;
    // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
    while ( element ) {
      x += element.offsetLeft - element.scrollLeft + element.clientLeft;
      y += element.offsetTop - element.scrollLeft + element.clientTop;
      element = element.offsetParent;
    }
  
    return { x: x, y: y };
  }