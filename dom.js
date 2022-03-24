let inputFieldElement = document.querySelector(".inputField")
let displaySentenceElement = document.querySelector(".displaySentence")
let btnElement = document.querySelector(".btn")
let lastBtnElement = document.querySelector(".lastBtn")
let showCountElement = document.querySelector(".showCount")
let longestElement = document.querySelector(".longest")
let sentences = document.querySelector('.sentences')

let wordInstance = word()

lastBtnElement.addEventListener('click', () => {

    alert(wordInstance.getSentences().length)
    let sentencesHtmlList =

        wordInstance
            .getSentences()
            .forEach(sentence => {
                let elem = document.createElement('li');
                elem.innerHTML = sentence;
                console.log(sentence + "thi is it");
                sentences.appendChild(elem)
            })

    


})
// sentencesHtmlList  = localStorage["sentence"]
if (!localStorage["sentence"]) {

    let element = localStorage.setItem("sentence", JSON.stringify(sentences))

    element = JSON.parse(localStorage.getItem("sentence"))

   
} else {
    element = JSON.parse(localStorage.getItem("sentence"))
}

function enterSentence() {
    let wordTake = inputFieldElement.value
    if (wordTake != '') {
        displaySentenceElement.innerHTML = wordInstance.sentence(wordTake)
        showCountElement.innerHTML = ("Count:" + " " + wordInstance.showHowmManyWords())
        longestElement.innerHTML = ("Longest word/s: " + " " + `<mark class="green">${wordInstance.highlightLongest()}</mark>`)
    }
}
btnElement.addEventListener('click', enterSentence)
let widget = () => {
    let check = document.querySelector("#hide").checked;
    if (check) {
        displaySentenceElement.innerHTML = `<mark>${wordInstance.longerThanFive()}</mark>`
    } else if (!check) {
        let inTake = inputFieldElement.value
        longestElement.innerHTML = " "
        longestElement.innerHTML = ("Longest word/s: " + " " + `<mark class = "green">${wordInstance.highlightLongest()}</mark>`)
        displaySentenceElement.innerHTML = wordInstance.sentence(inTake)
    }
}