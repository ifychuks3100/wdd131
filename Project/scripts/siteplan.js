// ===================================
// 1. DISPLAY CURRENT YEAR
// ===================================

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ===================================
// 2. CHESS QUIZ
// ===================================

// Select the quiz form and result container

const quizForm = document.querySelector("#chess-quiz");
const quizResult = document.querySelector("#quiz-result");


// Correct answers

const correctAnswers = {
    q1: "knight",
    q2: "queen",
    q3: "checkmate"
};


// ===================================
// 3. CHECK QUIZ ANSWERS
// ===================================

if (quizForm) {

    quizForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing

        event.preventDefault();


        // Get the answers submitted by the user

        const userAnswers = new FormData(quizForm);


        let score = 0;

        let unanswered = false;


        // Check each question

        for (let question in correctAnswers) {

            const answer = userAnswers.get(question);

            if (!answer) {
                unanswered = true;
            }

            else if (answer === correctAnswers[question]) {
                score++;
            }

        }


        // Make sure all questions are answered

        if (unanswered) {

            quizResult.textContent = "Please answer all questions before submitting.";

            return;

        }


        // Display the score

        quizResult.textContent = `You scored ${score} out of 3!`;


        // Give feedback based on score

        if (score === 3) {

            quizResult.textContent += " Excellent! You know your chess basics.";

        }

        else if (score === 2) {

            quizResult.textContent += " Good job! Keep learning.";

        }

        else if (score === 1) {

            quizResult.textContent += " Keep practising. You are getting there.";

        }

        else {

            quizResult.textContent += " Don't give up! Try again.";

        }


        // Save the highest score

        saveBestScore(score);

    });

}


// ===================================
// 4. SAVE BEST SCORE
// ===================================

function saveBestScore(score) {

    // Get the previous highest score

    let bestScore = localStorage.getItem("chessBestScore");


    // Convert the stored score into a number

    bestScore = Number(bestScore) || 0;


    // Compare the new score with the previous score

    if (score > bestScore) {

        localStorage.setItem("chessBestScore", score);

        bestScore = score;

    }


    // Display the highest score

    let bestScoreDisplay = document.querySelector("#best-score");


    if (!bestScoreDisplay) {

        bestScoreDisplay = document.createElement("p");

        bestScoreDisplay.id = "best-score";

        quizResult.insertAdjacentElement("afterend", bestScoreDisplay);

    }


    bestScoreDisplay.textContent = `Your highest score: ${bestScore}/3`;

}


// ===================================
// 5. DISPLAY RANDOM CHESS TIP
// ===================================

const chessTips = [

    "Always try to control the centre of the chessboard.",

    "Develop your knights and bishops early.",

    "Protect your king by castling when appropriate.",

    "Avoid moving the same piece repeatedly in the opening.",

    "Think about your opponent's possible moves before making yours.",

    "Don't leave your pieces unprotected."

];


// Select the tip container

const tipContainer = document.querySelector("#chess-tip");


// Display a random tip if the container exists

if (tipContainer) {

    const randomIndex = Math.floor(Math.random() * chessTips.length);

    tipContainer.textContent = chessTips[randomIndex];

}