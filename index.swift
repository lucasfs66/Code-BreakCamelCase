func solution(string: String ){
    var resultString = ""
    let arrayLetter = string.split(separator: "")
    
    for letter in arrayLetter{
        let letterString = String(letter)
        if letterString == letterString.uppercased(){
            resultString = "\(resultString) \(letterString)"
        } else {
            resultString = "\(resultString)\(letterString)"
        }
    }
    print(resultString)
}

solution(string: "camelCasing")
