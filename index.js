function word() {

    let sentences = (!localStorage['sentence'])

        ? localStorage.setItem("sentence", JSON.stringify([]))
        : JSON.parse(localStorage.getItem("sentence"));

    console.log(sentences + " what is inside");

    let words = ''
    // let addNewSentence = () => {
    //     let newSentence = sentence.shift()
    //     return newSentence
    // }
    let sentence = (phrase) => {
        words = phrase
        sentences.push(phrase)
        let newWord = words.split(' ')
        let highlight = ''
        for (let i = 0; i < newWord.length; i++) {
            if (newWord[i].length > 4) {
                highlight += `<mark> ${newWord[i]}  </mark>`
            } else {
                highlight += newWord[i] + ' '
            }
        }
        // addNewSentence()
        localStorage.setItem("sentence", JSON.stringify(sentences))
        return highlight
    }

    let showHowmManyWords = () => words.split(' ').length

    let getSentences = () => sentences

    let longerThanFive = () => {
        let keyWord = words.split(' ')
        let contain = ' '

        for (let i = 0; i < keyWord.length; i++) {
            if (keyWord[i].length > 5) {
                contain += `   ${keyWord[i]}  `
            }
        }
        return contain
    }


    let highlightLongest = () => {
        let take = words.split(' ')
        let arr = ' '
        let longWord = []
        for (let i = 0; i < take.length; i++) {
            const element = take[i];
            if (element.length > 5) {
                longWord.push(element)
            }
            arr += `<mark> ${longWord}  </mark>`
        }
        return longWord
    }

    return {
        sentence,
        showHowmManyWords,
        longerThanFive,
        highlightLongest,
        getSentences,
        // addNewSentence


    }
}