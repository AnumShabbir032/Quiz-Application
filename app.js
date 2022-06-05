var quizQuestions = [
    {
        num: 1,
        question: "HTML stand for",
        Option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",
        },
        answer: "Hyper text markup Language",
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        Option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",
        },
        answer: "Object-Base",
    },
    {
        num: 3,
        question: "The 'function' and  'var' are known as:",
        Option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",
        },
        answer: "Declaration statements",
    },
    {
        num: 4,
        question: "who is the present president of pakistan",
        Option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",
        },
        answer: "Arif Alvi",
    },
    {
        num: 5,
        question: "How many prayers in a day:",
        Option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",
        },
        answer: "5",
    },
    {
        num: 6,
        question: "How many total surah in quran",
        Option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",
        },
        answer: "114",
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        Option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",
        },
        answer: "HTML, Head, Title, Body",
    },
];

var quizBox = document.getElementById("quizBox");
var question = document.getElementById("question"); //get questions here
var optionlist = document.getElementsByClassName("optionlist") //get options container
var nextQues = document.getElementById("nextQues");
var counter = document.getElementById("counter");
var result = document.getElementById("result");
var counter = 0;
var score = 0;



function setQuestion(){
    question.innerHTML = quizQuestions[counter].question;
    optionlist[0].innerHTML =  quizQuestions[counter].Option.a;
    optionlist[1].innerHTML =  quizQuestions[counter].Option.b;
    optionlist[2].innerHTML =  quizQuestions[counter].Option.c;
    optionlist[3].innerHTML =  quizQuestions[counter].Option.d;
}

function nextQuestion(){
    counter ++;
    console.log(counter);

    if(counter < quizQuestions.length){
        setQuestion();
        counter.innerHTML = counter + 1 + "-" + quizQuestions.length;
    }
    else{
        console.log("hello");
        quizBox.style.display = "none";
        result.className = "show";
        result.innerHTML = score;
    }
}

nextQuestion.className = "hide";

for(var i = 0; i < optionlist.length; i++){
    optionlist[i].classList.remove("disabled");
    optionlist[i].style.backgroundColor = "lightblue"
}


function check(e){
    nextQuestion.className = "show";
    if(e.innerHTML == quizQuestions[counter].answer){
        score += 10;
        console.log(score);
        e.style.backgroundColor = "green";
    }
    else{
        e.style.backgroundColor = "red";
    }

    for(var i=0 ; i < question.length; i++){
        if(question[i].innerHTML == quizQuestions[counter].answer){
            question[i].style.backgroundColor = "green";

        }
    }
}
for (var i = 0; i < optionlist.length; i++){
    optionlist[i].className += " disabled"
}