let app = document.getElementsByClassName('content')[0]



const createHeart = () => {
    let heartBlock = document.createElement('div')
    let leftPiece = document.createElement('div')
    let rightPiece = document.createElement('div')
    let heart = document.createElement('div')
    heart.className = 'heart'
    heartBlock.className = 'heart__block'
    leftPiece.className = 'left__piece'
    rightPiece.className = 'right__piece'
    heartBlock.style.right = Math.random() * 100 + '%'
    app.append(heartBlock)
    heartBlock.append(heart)
    heart.append(leftPiece)
    heart.append(rightPiece)
    app.append(heartBlock)
    console.log(app.children);
}

setInterval(() => {
    createHeart()
    setTimeout(() => {
        app.removeChild(app.children[0])
    }, 3000)
}, Math.random() * 100)

// document.onload = heartRainfall()