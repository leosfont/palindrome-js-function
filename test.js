function reverseWord(word) {
    const arrayWord = word.split("")
    let reverseWord = ""
    for (index = arrayWord.length; index > 0; index--) {
        reverseWord += arrayWord[index-1]
    }
    console.log('reverse:', reverseWord)

    if (reverseWord.toLocaleLowerCase() == word.toLowerCase()) {
        console.log(true)
    } else {
        console.log(false)
    }
}



