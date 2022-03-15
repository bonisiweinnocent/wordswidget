let inputFieldElement = document.querySelector(".inputField")
let displaySentenceElement = document.querySelector(".displaySentence")
let btnElement = document.querySelector(".btn")
let wordInstance = word()
let showCountElement = document.querySelector(".showCount")

function enterSentence() {

    let wordTake =inputFieldElement.value
    if (inputFieldElement.value != '') {
        displaySentenceElement.innerHTML =wordInstance.sentence(wordTake)
        showCountElement.innerHTML = wordInstance.showHowmMany()
    }

}

btnElement.addEventListener('click', enterSentence)