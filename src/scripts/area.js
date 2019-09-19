const rankPersent = document.getElementsByClassName('rank__persent')
const rankBar = document.getElementsByClassName('rank__wrap__color')
for(let i = 0; i<rankPersent.length; i++){
	let rPersent = parseInt(rankPersent[i].innerText.replace('%', ''))
	rankBar[i].style.width = `${rPersent}%`
	if(rPersent < 50){
		rankBar[i].style.backgroundColor = '#189f96'
	} else if(rPersent > 49 && rPersent < 69){
		rankBar[i].style.backgroundColor = '#fdac2c'
	} else {
		rankBar[i].style.backgroundColor = '#ea6767'
	}
}
