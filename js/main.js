// import {august} from '../poems/august.mp3'
let heartsField = document.getElementsByClassName('hearts')[0]
let content = document.getElementsByClassName('content')[0]
let start = document.getElementsByClassName('start')[0]

start.addEventListener('click', () => setPhase('start'))

document.onmouseup = (e) => {
    createHeart(e.clientX, e.clientY)
    setTimeout(() => {
        heartsField.removeChild(heartsField.children[0])
    }, 1000)
}

const createHeart = (x, y) => {
    let heartBlock = document.createElement('div')
    let leftPiece = document.createElement('div')
    let rightPiece = document.createElement('div')
    let heart = document.createElement('div')
    let scale = Math.random() * 2
    heart.className = 'heart'
    heartBlock.className = 'heart__block'
    leftPiece.className = 'left__piece'
    rightPiece.className = 'right__piece'
    heartBlock.style.filter = `hue-rotate(${Math.random()*360}deg)`
    heartsField.append(heartBlock)
    heartBlock.append(heart)
    heart.append(leftPiece)
    heart.append(rightPiece)
    heartsField.append(heartBlock)
    if(x && y){
        heartBlock.style.transform = `scale(1, 1)`
        heartBlock.style.left = x - (heartBlock.scrollWidth / 2) + 'px'
        heartBlock.style.top = y - (heartBlock.scrollHeight / 2) + 'px'    
        heartBlock.classList.add('heart__click')
    }else {
        heartBlock.style.right = Math.random() * 100 + '%'
        heartBlock.style.bottom = Math.random() * 50 + '%'
        heartBlock.style.transform = `scale(${scale}, ${scale})`
        heartBlock.classList.add('heart__fly')
    }
}

setInterval(() => {
    createHeart()
    setTimeout(() => {
        heartsField.removeChild(heartsField.children[0])
    }, 3000)
}, 100)

let phase = ''

const poems = [
    {
        author: 'Сергей Есенин',
        poem: 'Заметался пожар голубой',
        path: '/valentine/poems/hooligan.mp3',
    },
    {
        author: 'Сергей Есенин',
        poem: 'Сыплет черемуха снегом',
        path: '/valentine/poems/cheremyha.mp3',
    },
    {
        author: 'Сергей Есенин',
        poem: 'Ну целуй меня, целуй',
        path: '/valentine/poems/kissme.mp3',
    },
    {
        author: 'Александр Пушкин',
        poem: 'Я помню чудное мгновенье',
        path: '/valentine/poems/chydnoe.mp3',
    },
    {
        author: 'Александр Пушкин',
        poem: 'Признание',
        path: '/valentine/poems/priznanie.mp3',
    },
    {
        author: 'Александр Пушкин',
        poem: 'Талисман',
        path: '/valentine/poems/talisman.mp3',
    },
    {
        author: 'Иосиф Бродский',
        poem: 'Августовские любовники',
        path: '/valentine/poems/august.mp3',
    },
    {
        author: 'Иосиф Бродский',
        poem: 'Холмы',
        path: '/valentine/poems/hills.mp3',
    },
    {
        author: 'Фёдор Тютчев',
        poem: 'Я встретил вас и всё былое',
        path: '/valentine/poems/vas.mp3',
    },
    {
        author: 'Александр Блок',
        poem: 'В ресторане',
        path: '/valentine/poems/restaurant.mp3',
    },
    {
        author: 'Александр Блок',
        poem: 'Прошли года, но ты все та же',
        path: '/valentine/poems/same.mp3',
    },
    {
        author: 'Афанасий Фет',
        poem: 'Какое счастье, и ночь, и мы одни',
        path: '/valentine/poems/nignt.mp3',
    },
    {
        author: 'Роберт Рождественский',
        poem: 'Всё начинается с любви',
        path: '/valentine/poems/start.mp3',
    },
    {
        author: 'Евгений Соя',
        poem: 'Здравствуй, моя Хиросима',
        path: '/valentine/poems/hirosima.mp3',
    },
]

const setPhase = (phase) => {
    let poem = poems[Math.round(Math.random() * 13)]
    switch (phase) {
        case 'start':
            let present = document.createElement('p')
            let poemInfo = document.createElement('p')
            let audio = document.createElement('audio')
            content.removeChild(content.children[0])
            content.removeChild(content.children[0])
            content.removeChild(content.children[0])
            poemInfo.innerText = `${poem.author} - ${poem.poem}`
            present.innerText = `Твой подарок это стих`
            audio.src = poem.path
            audio.autoplay = true
            content.append(present)
            content.append(poemInfo)
            content.append(audio);
            return
        default:
            return
    }
}

// setPhase('start')