"use strict";

(function() {
    let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let userPlay = confirm("Wanna play a game? Press OK");
    let currentUserScore = 0;

    if (userPlay){
        startGame();
    } else {
        console.log("User is a weiner");
    };

    function startGame() {
        currentUserScore = 0;
        alert("User is here to play!");
        let skipToHarderChallenge = confirm("Do you want to skip straight to the harder challenge?");
        let firstChallengeDone = false;
        if (!skipToHarderChallenge) {
            alert("Check out my awesome arrayOfNumbers in the console, which counts from 1 to 13:");
            guessLength(arrayOfNumbers);
            guessOutput(arrayOfNumbers);
            guessIndex(arrayOfNumbers);
            guessRandomIndex(arrayOfNumbers);
            guessRandomOutput(arrayOfNumbers);
            firstChallengeDone = true;
        }
        
        if (skipToHarderChallenge || firstChallengeDone) {
            if (firstChallengeDone || currentUserScore >= 4) {
                alert("YOU'RE DOING GREAT! Let's turn it up a notch.");
            }
            console.clear();
            let arrayOfStudents = [
                "Derek DenHartigh","Will Morrissey","Alex Darmos","Megan Schafer","Marion Luxem","Hannah Barker","Eric Medema","Mike Brameijer","Bob Matyas","Jessa Challa","Dave Gillespie","Jessica Otte","Humberto Flores"
            ];
            guessLength(arrayOfStudents);
            guessRandomIndex(arrayOfStudents);
            guessRandomOutput(arrayOfStudents);
            guessRandomIndex(arrayOfStudents);
            guessRandomOutput(arrayOfStudents);
        }

        endGame(skipToHarderChallenge, currentUserScore);
    }

    function guessLength(arrayWeArePlayingWith) {
        if (checkUserSawArray(arrayWeArePlayingWith)) {
            checkAnswer(prompt("What would array.length return?"), arrayWeArePlayingWith.length.toString()); 
        }
    }

    function guessOutput(arrayWeArePlayingWith, index = 0) {
        if (checkUserSawArray(arrayWeArePlayingWith)) {
            checkAnswer(prompt(`What would array[${index}] return?`), arrayWeArePlayingWith[index].toString());
        }
    }

    function guessIndex(arrayWeArePlayingWith, index = 4) {
        if (checkUserSawArray(arrayWeArePlayingWith)) {
            checkAnswer(prompt(`What index would I enter to get "${arrayWeArePlayingWith[index]}"?`), index.toString());
        }
    }

    function guessRandomIndex(arrayWeArePlayingWith) {
        guessIndex(arrayWeArePlayingWith, getRandomNumberBasedOnArray(arrayWeArePlayingWith));
    }

    function guessRandomOutput(arrayWeArePlayingWith) {
        guessOutput(arrayWeArePlayingWith, getRandomNumberBasedOnArray(arrayWeArePlayingWith));
    }

    function getRandomNumberBasedOnArray(arrayWeArePlayingWith) {
        return Math.floor(Math.random() * arrayWeArePlayingWith.length);
    }

    function checkUserSawArray(arrayToCheck) {
        logArray(arrayToCheck)
        while (!confirm("You saw the array, yes?")) {
            logArray(arrayToCheck);
        }
        return true;
    }

    function checkAnswer(answerEntered, rightAnswer) {
        if (answerEntered !== rightAnswer) {
            alert("Sorry, you are wrong!");         
        } else {
            alert("You are correct!");
            currentUserScore++;
        }
        logCurrentScore(currentUserScore);
    }

    function logArray(arrayToLog) {
        console.warn("THE ARRAY:")
        for (let item of arrayToLog) {
            console.log(`${item}\n`);
        }
    }

    function logCurrentScore(score) {
        alert(`Your current score: ${score}`);
    }

    function endGame(skippedChallenge, score) {
        if (skippedChallenge && score === 5) {
            alert(`Your final score: ${score}. You got a perfect score on only the harder challenge!`);
        } else if (skippedChallenge && score >= 3 ) {
            alert(`Your final score: ${score}. Not bad, but you should try for a perfect score!`);
        } else if (skippedChallenge && score <= 2) {
            alert(`Your final score: ${score}. Maybe you should not have skipped the first challenge!`);
        } else if (!skippedChallenge && score === 10) {
            alert(`Your final score: ${score}. WOW YOU GOT A PERFECT SCORE!!!!!`);
        } else if (!skippedChallenge && score >= 8) {
            alert(`Your final score: ${score}. Not bad, but you should try for a perfect score!`);
        } else if (!skippedChallenge && score >= 5 && score <= 7) {
            alert(`Your final score: ${score}. Hey, you did ok on the first part, so maybe try again with the harder one. \n Here's a tip: The second array has as many items as the first!!`);
        } else if (!skippedChallenge && score <= 6) {
            alert(`Your final score: ${score}. You should try again!`);
        }
        if (confirm(`Want to play again? Press OK.`)) {
            startGame();
        } else {
            console.log("User is a weiner. Goodbye.");
        }
    }
})();