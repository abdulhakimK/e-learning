const q1Submit = document.querySelector(".q1");
const q2Submit = document.querySelector(".q2");
const answerq1 = "To manage changes in code and collaborate with others";
q1Submit.addEventListener("click",validateQ1);
function validateQ1(){
    const selectedAnswer = document.querySelector('.inputq1:checked');
    if(selectedAnswer.value == answerq1){
        alert("correct answer");
    }
    else{
        alert("you're wrong ");
    }
}