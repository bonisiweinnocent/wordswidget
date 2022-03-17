let inputFieldElement = document.querySelector(".inputField")
let displaySentenceElement = document.querySelector(".displaySentence")
let btnElement = document.querySelector(".btn")

let showCountElement = document.querySelector(".showCount")
let longestElement = document.querySelector(".longest")

let wordInstance = word()



function enterSentence() {

    let wordTake = inputFieldElement.value

    // if (!localStorage["param"]) {
    
    //     wordTake = localStorage.setItem("param", JSON.stringify(wordTake))
    //     wordTake= JSON.parse(localStorage.getItem("param"))
    // }else {
      
    //     wordTake = JSON.parse(localStorage.getItem("param"))
    // }


    if (wordTake != '') {
        displaySentenceElement.innerHTML = wordInstance.sentence(wordTake)
        showCountElement.innerHTML = ("Count:"  + " " + wordInstance.showHowmManyWords())


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
