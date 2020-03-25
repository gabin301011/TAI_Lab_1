fetch('https://quiztai.herokuapp.com/api/quiz')
    .then(resp => resp.json())
    .then(resp => {
        preQuestions = resp;


let next = document.querySelector('.next');
let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');
let pointsElem = document.querySelector('.score');
let restart = document.querySelector('.restart');
let previous= document.querySelector('.previous');
let index = 0;
let points = 0;

document.querySelector(".list-group").style.display="none"

function setQuestion(index) {
    //clearClass();
    document.querySelector(".list").style.display = 'block';
    question.innerHTML = preQuestions[index].question;
    answers[0].innerHTML = preQuestions[index].answers[0];
    answers[1].innerHTML = preQuestions[index].answers[1];
    if (preQuestions[index].answers.length === 2) {
        answers[2].style.display = 'none';
        answers[3].style.display = 'none';
    } else {
        answers[2].style.display = 'block';
        answers[3].style.display = 'block';
    }
    answers[2].innerHTML = preQuestions[index].answers[2];
    answers[3].innerHTML = preQuestions[index].answers[3];
}

next.addEventListener('click', function () {
    document.querySelector(".list-group").style.display="block"
    document.querySelector(".next").innerHTML="Next"
    if(index>=preQuestions.length) {
        document.querySelector(".list").style.display="none"
        document.querySelector(".results").style.display="block"
        document.querySelector('.userScorePoint').innerHTML = points;
        let storage = localStorage.getItem('plays');
        if(storage!=undefined){
            storagejson = JSON.parse(storage);
            let numberPlys = storagejson.numberPlys;
            let oldavg = storagejson.oldavg;
            document.querySelector('.average').innerHTML = oldavg;
            numberPlys++;
            oldavg = oldavg + points;
            oldavg = oldavg / numberPlys;
            localStorage.setItem('plays',JSON.stringify({numberPlys: numberPlys,oldavg: oldavg}))
        }else{
            document.querySelector('.average').innerHTML = points;
            localStorage.setItem('plays',JSON.stringify({numberPlys: 1,oldavg: points}))
        }
    }
    else {
        whiteAnswers(index)
        setQuestion(index);
        document.querySelector("#idx").innerHTML = index+1
        activateAnswers();

    }
    index++;

});


function whiteAnswers(index) {
    for(let i=0; i<preQuestions[index].answers.length; i++){
        answers[i].style.backgroundColor="white"
    }
}

previous.addEventListener('click', function () {
    whiteAnswers(index)
    setQuestion(index-2)
    document.querySelector("#idx").innerHTML = index-1
    index--
    disableAnswers()
});


function doAction(event) {
    //event.target - Zwraca referencję do elementu, do którego zdarzenie zostało pierwotnie wysłane.
    if (event.target.innerHTML === preQuestions[index-1].correct_answer) {
        points++;
        pointsElem.innerText = points;
        event.target.style.backgroundColor="#289a27"
    } else {
        event.target.style.backgroundColor="#c41a21"
    }
    disableAnswers()
}

function activateAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', doAction);
    }
}

function disableAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener('click', doAction);
    }
}

restart.addEventListener('click', function (event) {
    index = 0;
    points = 0;
    event.preventDefault();
    let userScorePoint = document.querySelector('.score');
    userScorePoint.innerHTML = points;
    setQuestion(index);
    activateAnswers();
    document.querySelector(".list").style.display = 'block';
    document.querySelector(".results").style.display = 'none';
    document.querySelector(".next").innerHTML="Start"
});
    })
