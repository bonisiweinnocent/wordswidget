let inputFieldElement = document.querySelector(".inputField")
let displaySentenceElement = document.querySelector(".displaySentence")
let btnElement = document.querySelector(".btn")
let wordInstance = word()
let showCountElement = document.querySelector(".showCount")

function enterSentence() {

    let wordTake = inputFieldElement.value
    if (wordTake!= '') {
        displaySentenceElement.innerHTML = wordInstance.sentence(wordTake)
        showCountElement.innerHTML = ( wordInstance.showHowmManyWords() + "  " +"word(s) found")
        wordInstance.longerThan()
        
    }
}

btnElement.addEventListener('click', enterSentence)