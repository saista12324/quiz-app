const quizData = [
    {
        question: "1) An event in the probability that will never be happened is called as -",
        a: "unsure event",
        b: "sure event",
        c: "possible event",
        d: "impossible event",
        correct: "a",
    },
    {
        question: "2) What will be the value of P(not E) if P(E) = 0.07?",
        a: "90",
        b: "007",
        c: "93",
        d: "72",
        correct: "c",
    },
    {
        question: "3) What will be the probability of getting odd numbers if a dice is thrown?",
        a: "1/2",
        b: "2",
        c: "4/2",
        d: "5/2",
        correct: "a",
    },
    {
        question: "4) What is the probability of getting a sum as 3 if a dice is thrown?",
        a: "2/18",
        b: "1/18",
        c: "4",
        d: "1/36",
        correct: "b",
    },

    {
        question: "5) What is the probability of getting an even number when a dice is thrown?",
        a: "1/6",
        b: "1/2",
        c: "1/3",
        d: "1/4",
        correct: "b",
    },
    {
        question: "6) The probability of getting two tails when two coins are tossed is -",
        a: "1/6",
        b: "1/2",
        c: "1/3",
        d: "1/4",
        correct: "d",
    },
    {
        question: "7) What is the probability of getting the sum as a prime number if two dice are thrown?",
        a: "5/24",
        b: "5/12",
        c: "5/30",
        d: "1/4",
        correct: "b",
    },
    {
        question: "8) What is the probability of getting atleast one head if three unbiased coins are tossed?",
        a: "7/8",
        b: "1/2",
        c: "5/8",
        d: "8/9",
        correct: "a",
    },
    {
        question: "9) What is the probability of getting 1 and 5 if a dice is thrown once?",
        a: "1/6",
        b: "1/3",
        c: "2/3",
        d: "8/9",
        correct: "b",
    },
    {
        question: "10) What will be the probability of losing a game if the winning probability is 0.3?",
        a: "0.5",
        b: "0.6",
        c: "0.7",
        d: "0.8",
        correct: "c",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})