function word() {
    let words = ''

    let sentence = (phrases) => {
        words = phrases
        let newWord = words.split(' ')
        let highlight = ''

        for (let i = 0; i < newWord.length; i++) {
            console.log( highlight);
            if (newWord[i].length > 4) {

                highlight += `<mark class = "high"> ${newWord[i]}  </mark>`
            } else {
                highlight += newWord[i] + ' '
            }
        }
        return highlight
    }

    let showHowmManyWords = () =>
        words.split(' ').length


    let longerThan = () => {

    }




    return {
        sentence,
        showHowmManyWords,
        longerThan
    }



}