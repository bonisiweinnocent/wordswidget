let inputFieldElement = document.querySelector(".inputField")
let displaySentenceElement = document.querySelector(".displaySentence")
let btnElement = document.querySelector(".btn")
let wordInstance = word()
let showCountElement = document.querySelector(".showCount")
let longestElement = document.querySelector(".longest")
// let shortElement = document.querySelector('.short')
// let hideElement = document.querySelector('.hide')

function enterSentence() {

    let wordTake = inputFieldElement.value
    if (wordTake != '') {
        displaySentenceElement.innerHTML = wordInstance.sentence(wordTake)
        showCountElement.innerHTML = (wordInstance.showHowmManyWords() + "  " + "word(s) found")


    }
}

btnElement.addEventListener('click', enterSentence)

let widget = () => {
    
    let check = document.querySelector("#hide").checked;
  
    if (check) {
   
       displaySentenceElement.innerHTML =  wordInstance.longerThanFive()
       longestElement.innerHTML = (wordInstance.highlightLongest() + " " + "is the longest word")
    }
    

}
