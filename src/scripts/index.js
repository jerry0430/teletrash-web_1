const persentEle = document.getElementsByClassName('left__item__persent')
for(let i = 0; i<persentEle.length; i++){
	let persent = parseInt(persentEle[i].innerText.replace('%', ''))
	if (persent <= 40){
		persentEle[i].parentNode.classList.add('item-green')
	} else if (persent > 40 && persent < 70) {
		persentEle[i].parentNode.classList.add('item-yellow')
	} else {
		persentEle[i].parentNode.classList.add('item-red')
	}
}

const statusEle = document.getElementsByClassName('left__item__status__text')
for(let i = 0; i<statusEle.length; i++){
	let text = statusEle[i].innerText
	if (text === '回收'){
		statusEle[i].parentNode.classList.add('status-blue')
	} else {
		statusEle[i].parentNode.classList.add('status-yellow')
	}
}

const rankPersent = document.getElementsByClassName('rank__persent')
const rankBar = document.getElementsByClassName('rank__wrap__color')
for(let i = 0; i<rankPersent.length; i++){
	let rPersent = parseInt(rankPersent[i].innerText.replace('%', ''))
	rankBar[i].style.width = `${rPersent}%`
	if(rPersent <= 50){
		rankBar[i].style.backgroundColor = '#ea6767'
	} else if(rPersent > 50 && rPersent < 80){
		rankBar[i].style.backgroundColor = '#fdac2c'
	} else {
		rankBar[i].style.backgroundColor = '#179f96'
	}
}