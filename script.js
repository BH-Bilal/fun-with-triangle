const height = document.querySelector("#height");
const base = document.querySelector("#base");
const op = document.getElementById("#output");



function area() {
    let areaOfTriangle = height.value * base.value;
    op.innerText = areaOfTriangle;
}


























































// const inputs = document.querySelectorAll('.angle-input');
// const isTriangleBtn = document.querySelectorAll("#is-triangle-btn");
// const outputEL = document.querySelectorAll("#output");

// function calculateSumOfAngles() {
//     const sumOfAngles = 0;
//     sumOfAngles = (Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value));
//     // console.log(sumOfAngles);
//     return sumOfAngles;
// }

// function isTriangle() {
//     if (calculateSumOfAngles() === 180) {
//         // console.log('Yayy, the angles form a triangle');
//         outputEL.innerText = 'Yayy, the angles form a triangle';
//     } else {
//         // console.log('Oh Oh!, the angles do not form a triangle');
//         outputEL.innerText = 'Oh Oh!, the angles do not form a triangle';
//     }
//     // console.log("button working");
// }
// isTriangleBtn.addEventListener('click', isTriangle);



// const angles = document.querySelector('.angle-input');
// const isTriangleBtn = document.querySelector('#is-triangle-btn');
// const isTriangleOutput = document.querySelector('#is-triangle-output');

// function calculateSumOfAngles() {
//     const sumOfAngles =
//         Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
//     // console.log(sumOfAngles);
//     return sumOfAngles;
// }

// function isTriangle() {
//     if (calculateSumOfAngles() === 180) {
//         console.log('Yayy, the angles form a triangle');
//         isTriangleOutput.innerText = 'Yayy, the angles form a triangle';
//     } else {
//         console.log('Oh Oh!, the angles do not form a triangle');
//         isTriangleOutput.innerText = 'Oh Oh!, the angles do not form a triangle';
//     }
// }
// isTriangleBtn.addEventListener('click', isTriangle);