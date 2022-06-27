const quizData = [
    {
        question: "Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh?",
        a: "64 years",
        b: "30 years",
        c: "48 years",
        d: "42 years",
        correct: "d",
    },
    {
        question: "Rohan's age is five times Ajay’s and seven-eighteenth of Meena’s age. The sum of the ages of all three of them is 132 years. How much younger is Ajay to Meena?",
        a: "56 year",
        b: "83 year",
        c: "27 years",
        d: "cannot be determind",
        correct: "b",
    },
    {
        question: "The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teacher's age?",
        a: "33 years",
        b: "30 years",
        c: "27 year",
        d: "24 years",
        correct: "c",
    },
    {
        question: "Ram and Shyam’s average age is 65 years. The average age of Ram, Shyam and John is 53 years. What is the age of John?",
        a: "29 years",
        b: "31 years",
        c: "59 years",
        d: "45 years",
        correct: "a",
    },

    {
        question: "The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago?",
        a: "3:2",
        b: "46:25",
        c: "12:23",
        d: "8:3",
        correct: "c",
    },
    {
        question: " Rohan is as much younger than Ajay as he is older than Meena. The sum of ages of Ajay and Meena is 108 years. How old is Rohan?",
        a: "32 years",
        b: "64 years",
        c: "52 years",
        d: "36 years",
        correct: "c",
    },
    {
        question: "Average age of a family of 4 members was 19 years, 4 years back. Birth of a new child kept the average age of the family same even today. How old is the child today?",
        a: "4 year",
        b: "1 year",
        c: "2 year",
        d: "3 years",
        correct: "d",
    },
    {
        question: "12 years ago, age of P was 3 times the age of Q. After 12 years, ratio of ages of Q to P will be 2:3. What is the present age of P?",
        a: "54 years",
        b: "36 years",
        c: "24 years",
        d: "144 years",
        correct: "b",
    },
    {
        question: "The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17.What is value of K?",
        a: "9 years",
        b: "12 years",
        c: "5 years",
        d: "3 years",
        correct: "a",
    },
    {
        question: "A father is 4 times as old as his son. 8 years hence, the ratio of father’s age to the son’s age will be 20:7. What is the sum of their present ages?",
        a: "50",
        b: "72",
        c: "68",
        d: "65",
        correct: "d",
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