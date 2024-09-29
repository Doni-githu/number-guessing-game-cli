import readline from "readline"

console.log(`
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.
\n
Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
\n
`)


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function guessingNumber(number, guessed, type) {
    switch (type) {
        case "1":
            if (guessed === 10) {
                console.log(`Sorry. Your guessed wrong answers, it was ${number}`)
                rl.close()
                return
            }
            break;
        case "2":
            if (guessed === 5) {
                console.log(`Sorry. Your guessed wrong answers, it was ${number}`)
                rl.close()
                return
            }
            break;
        case "3":
            if (guessed === 3) {
                console.log(`Sorry. Your guessed wrong answers, it was ${number}`)
                rl.close()
                return
            }
            break;

        default:
            break;
    }
    rl.question("Enter your guess: ", (guess) => {
        if (guess == number) {
            console.log(`Congratulations! Your guessed the correct number in ${guessed} attemtps.`)
            rl.close()
            return
        }
        console.log(`Incorrect! The number is ${guess > number ? "less" : "greater"} than ${guess}`)
        guessed++
        guessingNumber(number, guessed, type)
    })
}



rl.question('Enter your choice: ', function (x) {
    const obj = {
        "1": "Easy",
        "2": "Medium",
        "3": "Hard"
    }
    console.log(`
Great! You have selected the ${obj[x]} difficulty level.
Let's start the game!
`)
    let number = Math.floor(Math.random() * 100) + 1
    if (x === "1") {
        let guess = 0;
        guessingNumber(number, guess, "1")
        return
    }
    if (x === "2") {
        let guess = 0;
        guessingNumber(number, guess, "2")
        return
    }
    if (x === "3") {
        let guess = 0;
        guessingNumber(number, guess, "3")
        return
    }
});
