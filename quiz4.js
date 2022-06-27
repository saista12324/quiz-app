const quizData = [
    {
        question: " A merchant has 1000 kg sugar, part of which sells at 8% profit and the rest at 18% profit. He gain 14% on the whole. The quantity sold at 8% profit is",
        a: "560 kg",
        b: "400 kg",
        c: "600 kg",
        d: "640 kg",
        correct: "b",
    },
    {
        question: "A book vendor sold a book at a loss of 20%. Had he sold it for Rs.108 more, he would have earned a profit of 30%. Find the cost price of the book ?",
        a: "Rs.216",
        b: "Rs.432",
        c: "Rs.648",
        d: "Rs.240",
        correct: "a",
    },
    {
        question: "The profit earned by a shopkeeper by selling a bucket at a gain of 8% is Rs.28 more than when he sells it at a loss of 8%. The cost price (in Rupees) of the bucket is",
        a: "170",
        b: "165",
        c: "190",
        d: "175",
        correct: "d",
    },
    {
        question: "When an article is sold at a gain of 20%, it yields Rs.60 more than when it is sold at a loss of 20%. The cost price of the article is",
        a: "Rs.200",
        b: "Rs.120",
        c: "Rs.150",
        d: "Rs.140",
        correct: "c",
    },

    {
        question: "Sandeep sells an article at a loss of 10%. Had he bought it at 20% less and sold it for Rs.55 more, he could have gained 40%. What is the cost price of the article ?",
        a: "Rs.200",
        b: "Rs.275",
        c: "Rs.225",
        d: "Rs.250",
        correct: "d",
    },

    {
        question: "Yogita sold a plasma TV at 20% gain to Shyamla. Shyamla sold it to Deepa at 10% profit. If Deepa had to pay Rs.33,000 for the plasma TV, find the cost price of the plasma TV for Yogita.",
        a: "Rs.30,000",
        b: "Rs.40,000",
        c: "Rs.25,000",
        d: "Rs.35,000",
        correct: "c",
    },

    {
        question: "A cooker is sold at a gain of 16%. If it has been sold for Rs.20 more, 20% would have been gained. The cost price of the cooker is",
        a: "Rs.350",
        b: "Rs.600",
        c: "Rs.400",
        d: "Rs.500",
        correct: "d",
    },

    {
        question: "A man sells his typewriter at 5% loss. If he sells it for Rs.80 more, he will gain 5%. The cost price of the typewriter is",
        a: "Rs.1,600",
        b: "Rs.800",
        c: "Rs.1,200",
        d: " Rs.1,000",
        correct: "b",
    },

    {
        question: "A man sold an article at a loss of 20%. If he has sold that article for Rs.12 more he would have gained 10%. Find the cost price of that article :",
        a: "Rs.60",
        b: "Rs.22",
        c: "Rs.40",
        d: "Rs.30",
        correct: "c",
    },

    {
        question: "A man sells an article at a gain of 15%. If he had bought it at 10% less and sold it for Rs.4 less, he would have gained 25%. The cost price of the article is",
        a: "Rs.140",
        b: "Rs.185",
        c: " Rs.150",
        d: " Rs.160",
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