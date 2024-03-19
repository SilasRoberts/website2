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
//draw ball on canvas
function drawball(){
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.size, 0, Math.PI * 2, true)
    ctx.stroke()
}

drawBall()





//Buttons
rulesbtn.addEventListener('click',() =>{
    rules.addClassList('show')
})
closebtn.addEventListener('click',() =>{
    rules.removeClassList('show')
})



