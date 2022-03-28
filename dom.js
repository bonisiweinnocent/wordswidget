let inputFieldElement = document.querySelector(".inputField")
let displaySentenceElement = document.querySelector(".displaySentence")
let btnElement = document.querySelector(".btn")
let lastBtnElement = document.querySelector(".lastBtn")
let showCountElement = document.querySelector(".showCount")
let longestElement = document.querySelector(".longest")
let sentences = document.querySelector('.sentences')
let list = document.querySelector('ul')
let average = document.querySelector('.avg')

let wordInstance = word()



lastBtnElement.addEventListener('click', () => {

    // alert(wordInstance.getSentences().length)
    let sentencesHtmlList =

        wordInstance
            .getSentences()
            .forEach(sentence => {
                let elem = document.createElement('li');
                elem.innerHTML = sentence;
                sentences.appendChild(elem)
            })
})


function enterSentence() {
    let wordTake = inputFieldElement.value
if(wordTake ===' '){
    displaySentenceElement.innerHTML = "Please type in a sentence"
}
else
    if (wordTake != '') {
        displaySentenceElement.innerHTML = wordInstance.sentence(wordTake)
        showCountElement.innerHTML = ("Count:" + " " + wordInstance.showHowmManyWords())
        
        average.innerHTML =parseInt(wordInstance.average())
        console.log(wordInstance.average());
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
list.addEventListener('click', (e) => {
    let showSentenceAgain = e.target.innerHTML
    displaySentenceElement.innerHTML = wordInstance.sentence(showSentenceAgain)
    
})