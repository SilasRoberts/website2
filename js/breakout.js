rules= document.getByElementById('rules')
rulesbtn = document.getByElementById('rules-btn')
closebtn = document.getByElementById('close-btn')


canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')


rulesbtn.addEventListener('click',() =>{
    rules.addClassList('show')
})
closebtn.addEventListener('click',() =>{
    rules.removeClassList('show')
})



