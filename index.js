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

        }
        // highlightLongest()
        return contain
    }
    let highlightLongest = () => {

        let v = words.split(" ")
        let long = ''
        let splitted = v.sort((strA, strB) => {
            return strB.length - strA.length;

        })

        console.log(splitted[0]);

        long += `<mark> ${splitted[0]}  </mark>`
        return long
    }



    return {
        sentence,
        showHowmManyWords,
        longerThanFive,
        highlightLongest
    }



}