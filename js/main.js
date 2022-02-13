let app = document.getElementsByClassName('content')[0]

document.onmouseup = (e) => {
    createHeart(e.clientX, e.clientY)
    setTimeout(() => {
        app.removeChild(app.children[0])
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
    if(x && y){
        heartBlock.style.left = x + 'px'
        heartBlock.style.top = y + 'px'    
        heartBlock.classList.add('heart__click')
    }else {
        heartBlock.style.right = Math.random() * 100 + '%'
        heartBlock.style.bottom = Math.random() * 50 + '%'
        heartBlock.classList.add('heart__fly')
    }
    heartBlock.style.transform = `scale(${scale}, ${scale})`
    heartBlock.style.filter = `hue-rotate(${Math.random()*360}deg)`
    app.append(heartBlock)
    heartBlock.append(heart)
    heart.append(leftPiece)
    heart.append(rightPiece)
    app.append(heartBlock)
}

setInterval(() => {
    createHeart()
    setTimeout(() => {
        app.removeChild(app.children[0])
    }, 3000)
}, 100)

// document.onload = heartRainfall()