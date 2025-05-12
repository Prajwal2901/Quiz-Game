const quizQuestions = [
    {
        question: "Q.1 What does HTML Stand for?",
        a : "Hypertext Markup Language", 
        b : "HypeTransfe Markup Language", 
        c : "Hypertext Machine Language", 
        d : "Hyperlink Text Markup Language", 
        correct: "a"
       
    },
    
    {
        question: "Q.2 Which of the following HTML element is used for creating an unordered list?",
        a : "<ui>", 
        b : "<i>", 
        c : "<em>", 
        d : "<ul>", 
        correct: "d"
       
    },

    {
        question: "Q.3 Which of the below CSS class is used to change the text color of CSS?",
        a : "background-color",
        b : "color",
        c : "text-color",
        d : "font-color",
       correct: "b",
    },

    {
        question: "Q.4 Which of the below is the abbreviation of CSS?",
        a :"Cascade sheets style",
        b :"Color style sheets",
        c :"Cascading style sheets",
        d :"Coded style sheets",
        correct: "c",
    },

    {
        question: "Q.5 Javascript ia an ______ language.",
        a : "Object-Oriented",
        b : "Object-based",
        c : "Procedural",
        d : "None of the above",
        correct: "a",
    },

    {
        question: "Q.6 Which of the following keyword is used to define a variable in javascript?",
        a : "var",
        b : "let",
        c : "const",
        d:  "All of the above",
        correct: "d", 
    },

    {
        question: "Q.7 Inside which HTML tag we put the Javascipt?",
        a : "<scripting>",
        b : "<js>",
        c : "<script>",
        d : "<javascript>",
        correct: "c", 
    },

    {
        question: "Q.8 How many headers are available in HTML by default?",
        a : "1",
        b : "6",
        c : "3",
        d : "5",
        correct: "b", 
    },

    {
        question: "Q.9 Which attribute is used to provide a unique name to an HTML element?",
        a : "id",
        b : "class",
        c : "type",
        d : "name",
        correct: "a", 
    },

    {
        question: "Q.10 Which of the following are parts of the CSS box model?",
        a : "Margins",
        b : "Borders",
        c : "Padding",
        d : "All of the above",
        correct: "d", 
    },
]


const startBtn = document.getElementById('start-btn')
const quizContainer = document.getElementById('quiz')
const homeSection = document.getElementById('home')
const answerEle = document.querySelectorAll('.answer')
const questionEle = document.getElementById('question')
const option_1 = document.getElementById('option_1')
const option_2 = document.getElementById('option_2')
const option_3 = document.getElementById('option_3')
const option_4 = document.getElementById('option_4')
const submitBtn = document.getElementById('submit')

startBtn.addEventListener('click',  () => {
    quizContainer.classList.add('active');
    homeSection.style.display = 'none';

})

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizQuestions[currentQuiz]
    questionEle.innerText = currentQuizData.question
    option_1.innerText = currentQuizData.a
    option_2.innerText = currentQuizData.b
    option_3.innerText = currentQuizData.c
    option_4.innerText = currentQuizData.d
}


function deselectAnswer() {
    answerEle.forEach(answerEl => answerEl.checked = false)
}

function getselected() {
    let answer
    answerEle.forEach(answerEle => {
        if(answerEle.checked) {
            answer = answerEle.id
        }
    })
    return answer
} 


submitBtn.addEventListener('click', () => {
    const answer  = getselected()
    if(answer) {
        if(answer === quizQuestions[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizQuestions.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <div class='result'>
                <h2> Your score: ${score}/${quizQuestions.length} </h2>
                <button class='restart_button' onclick='location.reload()'>Restart</button>
            </div>`;
        }
    }
})















