function word() {
    let words = []

    let sentence = (phrases) => {
        words.push(phrases)
        return words
    }

    let showHowmManyWords = () => 
      words[0].split(' ').length
        

    let longerThan = over4  => {
        for (let i = 0; i < words.length; i++) {
            const element = words[i];
        }


    }










    return {
        sentence,
        showHowmManyWords,
        longerThan
    }







}