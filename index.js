function solution(string) {
    let newString = ""
    let arrayOfLetters = string.split("")

    for(let i = 0; i < string.length; i++){
        if(arrayOfLetters[i].toUpperCase() === arrayOfLetters[i]){
            newString += ` ${arrayOfLetters[i].toLowerCase()}`
        } else {
            newString += arrayOfLetters[i]
        }
    }
    console.log(newString)
    return newString
}

solution('camelCasing')