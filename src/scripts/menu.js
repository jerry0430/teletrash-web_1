let menu = document.getElementById('menu')
const navi = '<div class="menu__logo">\
    <img src="./assets/tele-logo.png">\
</div>\
<div class="menu__navi">\
    <a href="./index.html" id="navi-index" class="menu__navi__item">\
    <i class="menu__navi__item__icon material-icons">insert_chart</i>\
    <p class="menu__navi__item__text">首頁</p>\
    </a>\
    <a href="./person.html" id="navi-person" class="menu__navi__item">\
    <i class="menu__navi__item__icon material-icons">person</i>\
    <p class="menu__navi__item__text">人員管理</p>\
    </a>\
    <a href="./area.html" id="navi-area" class="menu__navi__item">\
    <i class="menu__navi__item__icon material-icons">map</i>\
    <p class="menu__navi__item__text">區域管理</p>\
    </a>\
    <a id="navi-trash" class="menu__navi__item">\
    <i class="menu__navi__item__icon material-icons">delete</i>\
    <p class="menu__navi__item__text">垃圾桶管理</p>\
    </a>\
</div>\
<div class="menu__user">\
    <i class="menu__user__icon material-icons">account_circle</i>\
    <p class="menu__user__text">王小明</p>\
</div>\
'
menu.innerHTML = navi
setActive()
function setActive(){
    const href = window.location.href
    const nowPage = href.replace('.html', '').split('/').pop()
    const activeNavi = document.getElementById(`navi-${nowPage}`)
    activeNavi.classList.add('navi-active')
}

// const navigation = [
//     {
//         title: '首頁',
//         icon: 'insert_chart',
//         link: './index.html',
//         id: 'navi-index'
//     },
//     {
//         title: '人員管理',
//         icon: 'person',
//         link: './person.html',
//         id: 'navi-person'
//     },
//     {
//         title: '區域管理',
//         icon: 'map',
//         link: './area.html',
//         id: 'navi-area'
//     },
//     {
//         title: '垃圾桶管理',
//         icon: 'delete',
//         link: './trash.html',
//         id: 'navi-trash'
//     }
// ]
// createLogo()
// createNavi()
// createUser()
// 
// function createLogo(){
//     let imageDiv = document.createElement('div')
//     let logoImage = document.createElement('img')
//     imageDiv.className = 'menu__logo'
//     logoImage.src = './assets/tele-logo.png'
//     imageDiv.appendChild(logoImage)
//     menu.appendChild(imageDiv)
// }

// function createNavi(){
//     let naviWrap = document.createElement('div')
//     let naviItem = navigation.map(navi => {
//         let naviEle = document.createElement('a')
//         let naviIcon = document.createElement('i')
//         let naviTitle = document.createElement('p')
//         naviEle.id = navi.id
//         naviEle.className = 'menu__navi__item'
//         naviEle.href = navi.link
//         naviIcon.classList.add('menu__navi__item__icon', 'material-icons')
//         naviIcon.innerText = navi.icon
//         naviTitle.className = 'menu__navi__item__text'
//         naviTitle.innerText = navi.title
//         naviEle.appendChild(naviIcon)
//         naviEle.appendChild(naviTitle)
//         return naviEle
//     })
//     naviWrap.className = 'menu__navi'
//     naviItem.forEach(item => {
//         naviWrap.appendChild(item)
//     })
//     menu.appendChild(naviWrap)
// }

// function createUser() {
//     let userWrap = document.createElement('div')
//     let userIcon = document.createElement('i')
//     let userTitle = document.createElement('p')
//     userWrap.className = 'menu__user'
//     userIcon.classList.add('menu__user__icon', 'material-icons')
//     userIcon.innerText = 'account_circle'
//     userTitle.className = 'menu__user__text'
//     userTitle.innerText = '王小明'
//     userWrap.appendChild(userIcon)
//     userWrap.appendChild(userTitle)
//     menu.appendChild(userWrap)
// }
