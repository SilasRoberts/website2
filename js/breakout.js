rules= document.getByElementById('rules')
rulesbtn = document.getByElementById('rules-btn')
closebtn = document.getByElementById('close-btn')


canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')


score = 0
brickRowCount = 9
brickColumnCount = 5
//create ball properties
ball={
    x: canvas.width / 2,
    y:canvas.heigght / 2,
    size:10,
    speed:4,
    dx:4,
    dy:-4,
}

//create paddle properties
paddle = {
    x:canvas.width / 2 - 40,
    y:canvas.height - 20,
    w:80,
    h:10,
    speed:10,
    dx:0,
}


//brick properties
brickInfo={
w:70,
h:20,
padding:10,
offsetX: 45,
offsetY:60,
visible:true,
}
//createBricks
bricks = []
for(let i = 0; i < brickRowCount; i++){
    brciks[i] = []
    for (let j = 0; j < brickColumnCount; j++){
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
        bricks[i][j] ={x,y, ...brickInfo}
    }
}

//draw ball on canvas
function drawBall(){
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.size, 0, Math.PI * 2)
    ctx.fillStyle ='#0095dd'
    ctx.fill()
    ctx.closePath()

}
//draw paddle
function drawPaddle(){
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y,paddle.w, paddle.h)
    ctx.fillStyle ='#0095dd'
    ctx.fill()
    ctx.closePath()

}

//Draw score on canvas
function drawScore(){
    ctx.fillText(`Score:${score}`, canvas.width -100, 30)
    ctx.font = '20px Arial'
}

//draw bricks on canvas
function drawBricks(){
bricks.forEach(column => {
    column.forEach(brick => {
        ctx.beginPath()
        ctx.rect(brick.x,brick.y, brick.w, brick.h)
        ctx.fillStyle= brick.visible ? '#0095dd' : 'transparent';
        ctx.fill()
        ctx.closePath()
    })
})
}



//Draw everything

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height)
drawPaddle()
drawBall()
drawScore()
drawBricks()
}

//move the paddle on canvas
function movePaddle(){
    paddle.x = paddle.x + paddle.dx
    //border detection
    if(paddle.x < 0 ){
        paddle.x = 0
    }
    if(paddle.x + paddle.w > canvas.w){
        paddle.x = canvas.w - paddle.w
    }
}





//keydown event
function keyDown(e){
if(e.key =='ArrowRight'|| e.key == 'Right'){
    paddle.dx = paddle.speed
}
}
function keyUp(e){
    if(e.key == 'ArrowRight' || e.key'Right'){
    paddle.dx = 0
}
}
function keyDown(e){
    if(e.key =='ArrowLeft'|| e.key == 'Left'){
        paddle.dx = -1 *paddle.speed
    }
    }
    function keyUp(e){
        if(e.key == 'ArrowLeft' || e.key'Left'){
        paddle.dx = 0
}
}
//Keyboard event
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)



//
function moveBall(){
    ball.x = ball.x + ball.dx
    ball.y = ball.y + ball.dy

    //wallcollision(top)

    if(ball.y + ball.size < 0){
        ball.dy = -1 *ball.dy
    }
    //wall colosion(right)
    if (ball.x + ball.size > canvas.width){
        ball.dx = -1* ball.dx
    }
    //wall colosion(bottom)
    if(ball.y +ball.size > canvas.height){
        ball.dy = -1* ball.dy
    }
    if(ball.x +ball.size < 0){
        ball.dx = -1* ball.dx
    }
}



//Update the canvas drawing
function update(){
    moveBall()
    movePaddle()
    draw()
    requestAnimationFrame(update)
}
update()

//Buttons
rulesbtn.addEventListener('click',() =>{
    rules.addClassList('show')
})
closebtn.addEventListener('click',() =>{
    rules.removeClassList('show')
})



