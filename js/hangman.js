const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]

const correctLetters = []
const wrongLetters = []

function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </span>
    `).join('')}
`
    const innerWord = wordEl.innerText.replace(/\n/g, '')
    if(innerWord == selectedWord){
        finalMessage.innerText = 'Congratulations! You won!'
        popup.stly.display = 'flex'
    }
}


//update wrong letters
function updateWrongLettersEl(){
    wrongLettersEl.innerHYML= `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `
    figureParts.forEach((part, index) => {
        const erros = wrongLetters.length

        if(index < errors){
            part.style.display ='block'
        } else{
            part.style.display = 'none'
        }
    })


    if(wrongLetters.length == figureParts.length){
        finalMessage.innerText = 'Unfortunately you lost!'
        popup.style.display = 'flex'
    }
}


//show notification
function showNotification(){
    notification.classList.add('show')

    setTimeout(() => {
        notifciation.classList.remove('show')
    }, 2000)
}


//keydown letter press
window.addEventListener('keydown', e =>{
if(e.keyCode >= 65 && e.keyCode <=90){
    const letter = e.key

    if(selectedWord.includes(letter)){
        if(!correctLetters.includes(letter)){
            correctLetters.push(letter)
            displayWord()
        } else{
            showNotification()
        }
    } else{
        if(!wrongLetters.include(letter)){
            wrongLetters.push(letter)

            updateWrongLettersEl()
        } else {
            showNotification()
        }
    }
}
})


displayWord()
