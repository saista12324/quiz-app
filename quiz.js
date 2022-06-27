const quizData = [
    {
        question: "Two inlet pipes can fill an empty tank in 15 and 18 hours and one outlet pipe can empty the tank in 20 hours. If all the pipes opened simultaneously, then how many hours required fill the full tank?",
        a: "11 hours",
        b: "12 hours",
        c: "13 hours",
        d: "9 hours",
        correct: "c",
    },
    {
        question: "Two pipes A and B alone can fill an empty tank in 20 min and 24 min respectively. Two pipes are opened simultaneously, after some time pipe B is closed. In how many minutes after pipe B is closed if the tank was filled in 15 minutes?",
        a: "5 min",
        b: "6 min",
        c: "4 min",
        d: "4.5 min",
        correct: "b",
    },
    {
        question: "A tank has a leak which can empty a full tank in 28 minutes. A tap is turned on which can fill 2.5 liters a minutes. The tank now becomes empty in 42 minutes. What is the capacity of the tank?",
        a: "201 liters",
        b: "342 liters",
        c: "250 liters",
        d: "389 liters",
        correct: "a",
    },
    {
        question: "Two pipes A and B can fill a tank in 15 minutes and 25 minutes respectively. Both pipes are opened together and pipe B isclosed,5 minutes before the tank is filled completely. Calculate the total time required to fill the tank?",
        a: "11 1/4 min",
        b: "13 min",
        c: "12 min",
        d: "14 min",
        correct: "a",
    },

    {
        question:"Pipe P can fill an empty tank in 24 hours and pipe Q can fill the same tank in 16 hours. How many hours required to fill the whole tank, if P and Q fill alternatively doing the work, P begins on first hour?",
        a: "17",
        b: "19",
        c: "18",
        d: "20",
        correct: "b",
    },

    {
        question: "Three pipes A, B and C can fill a tank in 10 hours. After working at it together for 3 hours, C is closed and A and B can fill the remaining part in 14 hours. How much time taken by C to fill the tank alone?",
        a: "18 hours",
        b: "20 hours",
        c: "24 hours",
        d: "22 hours",
        correct: "b",
    },

    {
        question: "P, Q and R can fill the tank in 12, 16 and 24 min respectively. All three began to fill the tank together but P and Q left 3 and 4 min respectively before filling the tank. Find the total time taken by all of them to fill the tank?",
        a: "12 min",
        b: "16 min",
        c: "8  min",
        d: "10 min",
        correct: "c",
    },

    {
        question: "Pipe B is two times efficient as pipe C. Pipe A and B together can fill an empty tank in 8 4/7 hours. Pipe A and C together can fill the same tank in 12 hours. In how many hours required filling by pipe B alone?",
        a: "15",
        b: "12",
        c: "20",
        d: "30",
        correct: "a",
    },

    {
        question: "Pipe A and B can fill an empty tank in 8 hours. Pipe B and C together can fill the same tank in 9 3/5 hours. Pipe A opened for first one hour, Pipe B opened for second one hour and pipe C opened for third one hour and this process is repeated until the tank filled completely. How many hours required filling half of the tank if A is twice efficient as B?",
        
        a: "10 hrs",
        b: "12 hrs",
        c: "6 hrs",
        d: "8 hrs",
        correct: "d",
    },

    {
        question: "A cistern can be filled by three pipes A, B and C alone12hrs, 24hrs and 48 hrs respectively. There is an opening D in the cistern that empties the cistern at the rate of 6m/hr. If the cistern is 96m deep then, in how much time will it be filled upto 72hrs of its depth if all the pipes are opened together at the start but B is closed after an hour.",
        a: "17 hrs",
        b: "20 hrs",
        c: "10 hrs",
        d: "12 hrs",
        correct: "a",
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

function Timer() {

    let totaltime = 200;
    let min = 0;
    let sec = 0;
    let counter = 0;


    let timer = setInterval(function () {
        counter++;
        min = math.floor((totaltime - counter) / 60);
        sec = totaltime - min * 60 - counter;
        $(".Timer Box span").text(min + ":" + sec);

        if (counter == totaltime) {
            clearInterval(timer);
        }
    }, 1000);
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


