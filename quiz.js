const form = document.querySelector(".quiz-form");
const submitbtn = document.querySelector("#submit-answer");
const outputEL = document.querySelector(".output");

const rytanswer = ["90°", "Right Angled"];

function calculatescore() {
    let score = 0;
    let index = 0;
    const formresults = new FormData(form);
    for (let value of formresults.values()) {
        if (value === rytanswer[index]) {
            score = score + 1;
            outputEL.innerHTML = "Hurry... your score is " + score;
        } else {

            outputEL.innerHTML = "Its okay try again " + score;
        }

        index = index + 1;
    }

    // if (rytanswer === value) {
    //     outputEL.innerHTML = "Your Score is" + score;
    // } else {
    //     outputEL.innerHTML = "Your Score is" + score;

    // }

}
submitbtn.addEventListener('click', calculatescore)