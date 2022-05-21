const sides = document.querySelectorAll(".side-input");
const BtnHypo = document.querySelector("#hypotenuse-btn");
const outputEL = document.querySelector("#Output");

function calculatesumofsquares(a, b) {
    const sumofsqures = a * a + b * b;
    // console.log(sumofsqures);
    return (sumofsqures);

}

// function calculatehypotenuse() {
//     const sumofsqures = calculatesumofsquares(sides[0].value, sides[1].value);
//     const lengthofhypotenuse = Math.sqrt(sumofsqures);
//     //     console.log(sumofsqures);

function calculatehypotenuse() {
    const sumofsqures = calculatesumofsquares(Number(sides[0].value), Number(sides[1].value));
    const lengthofhypotenuse = Math.sqrt(sumofsqures);

    // console.log(lengthofhypotenuse);
    outputEL.innerText = " The Length of hypotenuse is " + lengthofhypotenuse;

}

BtnHypo.addEventListener("click", calculatehypotenuse);