function word() {
    let words = ''
    let sentence = (phrases) => {
        words = phrases
        let newWord = words.split(' ')
        let highlight = ''
        for (let i = 0; i < newWord.length; i++) {
            if (newWord[i].length > 4) {
                highlight += `<mark> ${newWord[i]}  </mark>`
            } else {
                highlight += newWord[i] + ' '
            }
            localStorage.setItem("param", JSON.stringify(highlight))
        }
        return highlight
    }
    let showHowmManyWords = () =>
        words.split(' ').length
    let longerThanFive = () => {
        let keyWord = words.split(' ')
        let contain = ' '
       
        for (let i = 0; i < keyWord.length; i++) {
            if (keyWord[i].length > 5) {
                contain += `   ${keyWord[i]}  `
            }

            console.log(keyWord + "Ths is  a consolo");

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

                console.log(longWord + " 65656656");

            }
            arr += `<mark> ${longWord}  </mark>`
        }
        return longWord
    }





    return {
        sentence,
        showHowmManyWords,
        longerThanFive,
        highlightLongest
    }
}