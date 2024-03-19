rules= document.getByElementById('.rules')
rules-btn = document.getByElementById('.rules-btn')
close-btn = document.getByElementById('.')

rules-btn.addEventListener(click, =>{
    rules.addClassList('show')
})
