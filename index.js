function word() {

    let sentences = (!localStorage['sentence'])

        ? localStorage.setItem("sentence", JSON.stringify([]))
        : JSON.parse(localStorage.getItem("sentence"));

    let words = ''






    // let removeDuplicates = sent => {
    //     return sentences.filter((item,
    //         index) => sent.indexOf(item) === index);
    // }

    let sentence = (phrase) => {
        words = phrase

        if (sentences.length < 5) {
            sentences.push(phrase)
        } else if (sentences.length >= 5) {
            sentences.shift();
            sentences.push(phrase)
        }
        let newWord = words.split(' ')
        let highlight = ''
        for (let i = 0; i < newWord.length; i++) {
            if (newWord[i].length > 4) {
                highlight += `<mark> ${newWord[i]}  </mark>`
            } else {
                highlight += newWord[i] + ' '
            }
        }




        localStorage.setItem("sentence", JSON.stringify(sentences))

        return highlight
    }

    let showHowmManyWords = () => words.split(' ').length

    let average = () => {
        let total = 0;
        for (let i = 0; i < sentences.length; i++) {
            total += sentences[i];

            console.log(total+ "9999999");
        }
        let avg = total / sentences.length;
        return avg
    }

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
        average



    }
}