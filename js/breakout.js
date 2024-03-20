rules= document.getByElementById('rules')
rulesbtn = document.getByElementById('rules-btn')
closebtn = document.getByElementById('close-btn')


canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

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



//draw ball on canvas
function drawball(){
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.size, 0, Math.PI * 2)
    ctx.fillStyle ='#0095dd'
    ctx.fill()
    ctx.closePath()

}

drawBall()





//Buttons
rulesbtn.addEventListener('click',() =>{
    rules.addClassList('show')
})
closebtn.addEventListener('click',() =>{
    rules.removeClassList('show')
})



