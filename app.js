let max = parseInt(prompt("Enter a number > or = 10"))
while (!(max >= 10)) {
    if (isNaN(max)) {
        alert("You can't exit 😝")
    }
    alert("Invalid input 😠")
    max = parseInt(prompt("Enter a number > or = 10"))
}
let min = 1;
let num = Math.floor(Math.random() * max) + 1;
alert("A random number has been assigned 😀")
let inp = parseInt(prompt(`Guess the number 🤔 : ${min} - ${max}`))
while (!(inp === num)) {
    if (inp > min && inp < num) {
        min = inp;
        alert(`Your number in the range of ${min} and ${max}`)
        inp = parseInt(prompt(`Guess the number 🤔 : ${min} - ${max}`))
    }
    else if (inp > num && inp < max) {
        max = inp;
        alert(`Your number in the range of ${min} and ${max}`)
        inp = parseInt(prompt(`Guess the number 🤔 : ${min} - ${max}`))
    }
    else if (inp < min || inp > max) {
        alert(`You can't enter a number less than ${min} and greater than ${max}`)
        inp = parseInt(prompt(`Guess the number 🤔 : ${min} - ${max}`))
    }
    else if (inp === max || inp === min) {
        alert(`Your number is in the range of ${min} and ${max}`)
        inp = parseInt(prompt(`Guess the number 🤔 : ${min} - ${max}`))
    }
    else if (isNaN(inp)) {
        alert("You can't exit 😝")
        inp = parseInt(prompt(`Guess the number 🤔 : ${min} - ${max}`))
    }
}
alert(`Yay 🎉 ! You guessed the number correctly 🥳 : ${num}`)