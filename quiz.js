function checkAnswer() {
    let correctAnswer='4';
    let clickOption=document.querySelector('input[name="quiz"]:checked');
    let FeedbackElement = document.getElementById('feedback');

    if (clickOption){
        let userAnswer=clickOption.value;

        if (userAnswer === correctAnswer){
            FeedbackElement.innerHTML = 'Correct! Well done.';
            FeedbackElement.style.color = 'green';
        } else{
            FeedbackElement.innerHTML = "That's incorrect. Try again!";
            FeedbackElement.style.color = 'red';
        }
    }
    }
    let Answer = document.getElementById('submit-answer');
    Answer.addEventListener('click', checkAnswer);
