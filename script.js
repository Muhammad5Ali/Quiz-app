let correctAnswers = 0;
let totalQuestions = 0;

function generateQuestion() {
    let operation = document.getElementById('operation').value;
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    if (operation === '/' && num2 === 0) num2 = 1; 

    let quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `<p>${num1} ${operation} ${num2} = <input id="answer" type="number"></p>
                                 <button onclick="checkAnswer(${num1}, ${num2}, '${operation}')">Submit Answer</button>`;
}

function checkAnswer(num1, num2, operation) {
    let userAnswer = parseFloat(document.getElementById('answer').value);
    let correctAnswer;
    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
    }
    if (userAnswer === correctAnswer) {
        alert('Correct!');
        correctAnswers++;
    } else {
        alert(`Incorrect. The correct answer is ${correctAnswer}.`);
    }
    totalQuestions++;
}

function endQuiz() {
    let score = (correctAnswers / totalQuestions) * 100;
    alert(`Quiz ended. Your score is ${score.toFixed(2)}%.`);
}