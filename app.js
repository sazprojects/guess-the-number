let max = parseInt(prompt("Enter a number"))
while (!(max > 1)) {
    if (isNaN(max)) {
        alert("You can't exit :P")
    }
    alert("Enter a number greater than 1")
    max = parseInt(prompt("Enter a number"))
}
let min = 1;
let num = Math.floor(Math.random() * max) + 1;
let inp = parseInt(prompt(`Guess the number: between ${min} and ${max}`))
while (!(inp === num)) {
    if (inp > min && inp < num) {
        min = inp;
        alert(`Your number is between ${min} and ${max}`)
        inp = parseInt(prompt(`Guess the number: between ${min} and ${max}`))
    }
    else if (inp > num && inp < max) {
        max = inp;
        alert(`Your number is between ${min} and ${max}`)
        inp = parseInt(prompt(`Guess the number: between ${min} and ${max}`))
    }
    else if (inp < min || inp > max) {
        alert(`You can't enter a number less than ${min} and greater than ${max}`)
        inp = parseInt(prompt(`Guess the number: between ${min} and ${max}`))
    }
    else if (inp === max || inp === min) {
        alert(`Your number is between ${min} and ${max}`)
        inp = parseInt(prompt(`Guess the number: between ${min} and ${max}`))
    }
    else if (isNaN(inp)) {
        alert("You can't exit :P")
        inp = parseInt(prompt(`Guess the number: between ${min} and ${max}`))
    }
}
alert(`Yay ! You guessed the number correctly: ${num}`)