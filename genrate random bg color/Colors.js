let backgroundHeader = document.querySelector("#header");

let backgroundButton = document.querySelector("#button");

backgroundButton.onclick = () => {
    let random = Math.random() * 255;
    let backgroundColors = Math.floor(random);
    let random2 = Math.random() * 255;

    let backgroundColors2 = Math.floor(random2);
    let random3 = Math.random() * 255;
    let backgroundColors3 = Math.floor(random3);
    backgroundHeader.style.backgroundColor = `rgb(${backgroundColors},${backgroundColors2},${backgroundColors3})`
    backgroundButton.style.backgroundColor = `rgb(${backgroundColors},${backgroundColors2},${backgroundColors3})`
}



let userNumber1 = document.getElementById("user1");
let userNumber2 = document.getElementById("user2");
// let operators = document.getElementById("#operator")
let add = document.getElementById("demo")

let btnAdd = document.getElementById("button2");

let btnSubtraction = document.getElementById("button3");
let btnMultiplication = document.getElementById("button4");
let btndivision = document.getElementById("button5");
let btnexponential = document.getElementById("button6");
let btnremainder = document.getElementById("button7");











btnAdd.onclick = () => {
    let usersNumbersInput = Number(userNumber1.value);
    let usersNumberInput2 = Number(userNumber2.value);
    // console.log(operators2);
    // if(operators2=='+'){
    let totalSum = usersNumbersInput + usersNumberInput2;
    // console.log(totalSum);
    // }
    add.innerHTML = totalSum;

}

btnSubtraction.onclick = () => {
    let usersNumbersInput = Number(userNumber1.value);
    let usersNumberInput2 = Number(userNumber2.value);
    // if(usersNumberInput2==0){
    //     return 0
    // }
    let totalSum = usersNumbersInput - usersNumberInput2;
    add.innerHTML = totalSum;
}



btnMultiplication.onclick = () => {
    let usersNumbersInput = Number(userNumber1.value);
    let usersNumberInput2 = Number(userNumber2.value);
    let totalSum = usersNumbersInput * usersNumberInput2;
    add.innerHTML = totalSum;
}

btndivision.onclick = () => {
    let usersNumbersInput = Number(userNumber1.value);
    let usersNumberInput2 = Number(userNumber2.value);
    let totalSum = usersNumbersInput / usersNumberInput2;
    add.innerHTML = totalSum;
}
btnexponential.onclick = () => {
    let usersNumbersInput = Number(userNumber1.value);
    let usersNumberInput2 = Number(userNumber2.value);
    let totalSum = usersNumbersInput ** usersNumberInput2;
    add.innerHTML = totalSum;
}
btnremainder.onclick = () => {
    let usersNumbersInput = Number(userNumber1.value);
    let usersNumberInput2 = Number(userNumber2.value);
    let totalSum = usersNumbersInput % usersNumberInput2;
    add.innerHTML = totalSum;
}



// let getUsers1Data = document.getElementById("inputusers1");
// let getUsersOperators = document.getElementById("operators");
// let getUsers2Data = document.getElementById("inputusers2");
// let getResultsData = document.getElementById("para")

// let getButton = document.getElementById("button8");


// getButton.addEventListener("click", () => {
//     let users1 = Number(getUsers1Data.value);
//     let users2 = Number(getUsers2Data.value);

//     let operatorsNum = getUsersOperators.value;
//     let results;
//     if (operatorsNum === '+') {
//         results = users1 + users2;
//     } else if (operatorsNum === '-') {
//         results = users1 - users2;
//     } else if (operatorsNum === '/') {
//         results = users1 / users2;

//     } else if (operatorsNum === '*') {
//         results = users1 * users2;
//     } else if (operatorsNum === '%') {
//         results = users1 % users2;
//     }
//     getResultsData.textContent = results;
// })










