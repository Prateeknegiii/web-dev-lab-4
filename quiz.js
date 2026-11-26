// Quiz questions array: each item is an object with a question and an answer
const quizQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Which language is used for web development: JavaScript or Python?", answer: "JavaScript" },
  { question: "How many days are there in a week?", answer: "7" }
];

// Function that runs the whole quiz
function runQuiz() {
  let score = 0; // keeps track of correct answers

  // Go through each question one by one
  for (let i = 0; i < quizQuestions.length; i++) {
    // Ask the question and take the user's answer
    const userAnswer = prompt(quizQuestions[i].question);

    // userAnswer is null if the user clicks Cancel, so check it first
    // Then remove extra spaces and ignore upper/lower case before comparing
    if (userAnswer && userAnswer.trim().toLowerCase() === quizQuestions[i].answer.toLowerCase()) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Show the final score
  alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Start the quiz
runQuiz();