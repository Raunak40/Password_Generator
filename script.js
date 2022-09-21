const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let resultOneEl = document.getElementById("resultOne")
let resultTwoEl = document.getElementById("resultTwo")
let passwordLength = 15

function getRandomCharOne() {
        let randomCharsOne = Math.floor(Math.random() * characters.length)
        return characters[randomCharsOne]

}
function getRandomCharTwo() {
        let randomCharsTwo = Math.floor(Math.random() * characters.length)
        return characters[randomCharsTwo]

}

function generate() {
        let firstPassword = ""
        let secondPassword = ""
        for (let i = 0; i < passwordLength; i++) {
                firstPassword += getRandomCharOne()
                secondPassword += getRandomCharTwo()
        }
        resultOneEl.textContent = firstPassword
        resultTwoEl.textContent = secondPassword
}

function copyFirst() {
        let textarea = document.createElement("textarea")
        const password = resultOneEl.textContent
        textarea.value = password
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
        alert("Copied the password: " + textarea.value)
}

function copySecond() {
        let textarea = document.createElement("textarea")
        const password = resultTwoEl.textContent
        textarea.value = password
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
        alert("Copied the password: " + textarea.value)
}

