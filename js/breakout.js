rules= document.getByElementById('.rules')
rules-btn = document.getByElementById('.rules-btn')

rules-btn.addEventListener(click, =>{
    rules.addClassList('show')
})
