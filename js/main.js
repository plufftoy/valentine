let heartsField = document.getElementsByClassName('hearts')[0]

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
        heartBlock.style.transform = `scale(${scale}, ${scale})`
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

let phase = 'start'

const setPhase = (phase) => {
    phase = phase
    switch (phase) {
        case 'start':
            
            break;
    
        default:
            break;
    }
}