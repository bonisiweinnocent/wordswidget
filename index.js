function word() {
    let words = ''

    let sentence = (phrases) => {
        words = phrases
        return words
    }

    let showHowmManyWords = () =>
        words.split(' ').length


    let longerThan = over => {
        words.split(' ')
        console.log(words + "uuuu");

        for (let i = 0; i < words.length; i++) {
            const element = words[i];



            return element
        }
    }




    return {
        sentence,
        showHowmManyWords,
        longerThan
    }



}