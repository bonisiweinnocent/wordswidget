let inputFieldElement = document.querySelector(".inputField")
let displaySentenceElement = document.querySelector(".displaySentence")
let btnElement = document.querySelector(".btn")
let lastBtnElement = document.querySelector(".lastBtn")
let showCountElement = document.querySelector(".showCount")
let longestElement = document.querySelector(".longest")



lastBtnElement.addEventListener('click', () => {
    let showHistory = inputFieldElement.value
    let areaElement = document.querySelector(".area")

      if (!localStorage["param"]) {

        showHistory = localStorage.setItem("param", JSON.stringify(showHistory))
        showHistory= JSON.parse(localStorage.getItem("param"))
    }else {

        showHistory = JSON.parse(localStorage.getItem("param"))
    }
})



let wordInstance = word()



function enterSentence() {

    let wordTake = inputFieldElement.value
    if (wordTake != '') {
        displaySentenceElement.innerHTML = wordInstance.sentence(wordTake)
        showCountElement.innerHTML = ("Count:" + " " + wordInstance.showHowmManyWords())
        longestElement.innerHTML = ("Longest word/s: " + " " + wordInstance.highlightLongest())

    }
}

btnElement.addEventListener('click', enterSentence)

let widget = () => {

    let check = document.querySelector("#hide").checked;

    if (check) {

        displaySentenceElement.innerHTML = wordInstance.longerThanFive()
        
    }else if(!check){
        let inTake = inputFieldElement.value
        longestElement.innerHTML =" "
        
        displaySentenceElement.innerHTML = wordInstance.sentence(inTake)
    }
    

}