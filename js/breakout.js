rules= document.getByElementById('.rules')
rules-btn = document.getByElementById('.rules-btn')
close-btn = document.getByElementById('.close-btn')

rules-btn.addEventListener(click, =>{
    rules.addClassList('show')
})
close-btn.addEventListener(click, =>{
    rules.removeClassList('remove')
})
