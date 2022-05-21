const angles = document.querySelectorAll(".angel-input");
const triangleBtn = document.querySelector("#is-triangle-btn");
const outputEL = document.querySelector("#output");

function calculateSumOfAngles() {
    const sumOfAngles =
        Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
    console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle() {
    if (calculateSumOfAngles() === 180) {
        console.log('Yayy, the angles form a triangle');
        outputEL.innerText = 'Yayy, the angles form a triangle';
    } else {
        console.log('Oh Oh!, the angles do not form a triangle');
        outputEL.innerText = 'Oh Oh!, the angles do not form a triangle';
    }
}
triangleBtn.addEventListener('click', isTriangle);