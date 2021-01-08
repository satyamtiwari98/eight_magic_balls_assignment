// Here JavaScript Programming begins

// Function to get user name and display hello message and a fortune prediction button to user
function userInput() {
    let input = document.getElementById("user").value;
    localStorage.setItem('input', input); // this is to store the value of the string locally and access it when ever required
    let butt = document.querySelector("#fortune-btn");
    let mess = document.querySelector("#fortune");
    console.log(input);
    mess.textContent = `Hello " Mr. ${input} " !!!!`;
    butt.style.display = "block";

}


// This function is used for displaying user a hello message using the locally stored user name on home.html
function myHeading() {
    document.getElementById("head").innerHTML = `Enter Your Question " Mr. ${localStorage.getItem('input')} "!!!`;
}

function myFunction() {
    animate();
    setTimeout(askQues, 1500);
    // askQues();
}

function callMyfunction() {
    animate();
    setTimeout(quesAns, 1500);
    // quesAns();
}

// This function is used to answer all the queries asked by user
function askQues() {

    let userQuestion = document.getElementById('ques').value;
    console.log(userQuestion);
    if (isNaN(userQuestion)) {
        console.log("we are in if block");

        let randomNumber = Math.floor(Math.random() * 8);

        console.log(randomNumber);

        let eightBall = "";

        switch (randomNumber) {
            case 0: eightBall = 'It is certain';
                break;

            case 1: eightBall = 'It is decidedly so';
                break;

            case 2: eightBall = 'Reply hazy try again';
                break;

            case 3: eightBall = 'Cannot predict now';
                break;

            case 4: eightBall = 'Do not count on it';
                break;

            case 5: eightBall = 'My sources say no';
                break;

            case 6: eightBall = 'Outlook not so good';
                break;

            case 7: eightBall = 'Signs point to yes';
                break;

        }

        let dis = document.querySelector('#quesDiv');
        dis.style.display = "none";


        console.log(eightBall);
        document.getElementById('answer').innerHTML = `" ${eightBall} "`;

    } else {

        let dis = document.querySelector('#quesDiv');
        dis.style.display = "none";

        document.getElementById('answer').innerHTML = '"This is invalid Question. TryAgain !!!"'

    }
}


// This function is used to answer users question on selection of any of the listed questions
function quesAns() {



    let randomNumber = Math.floor(Math.random() * 8);

    console.log(randomNumber);

    let eightBall = "";

    switch (randomNumber) {
        case 0: eightBall = 'It is certain';
            break;

        case 1: eightBall = 'It is decidedly so';
            break;

        case 2: eightBall = 'Reply hazy try again';
            break;

        case 3: eightBall = 'Cannot predict now';
            break;

        case 4: eightBall = 'Do not count on it';
            break;

        case 5: eightBall = 'My sources say no';
            break;

        case 6: eightBall = 'Outlook not so good';
            break;

        case 7: eightBall = 'Signs point to yes';
            break;

    }

    let dis = document.querySelector('#quesDiv');
    dis.style.display = "none";

    console.log(eightBall);
    document.getElementById('answer').innerHTML = `" ${eightBall} "`;


}


function animate() {

    let ball = document.getElementById("ball");
    ball.classList.add('animateBall');
    setTimeout(function () { ball.classList.remove('animateBall'); }, 1500)


}