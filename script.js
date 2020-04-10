// document ready
$(function(){
    let correctAnswers;
    let questions = $("form");
    let answers = [1,2,2,0,3,2,0,1,3,2]

    function checkAnswer(question, correctAnswer) {
        if(questions[question-1][correctAnswer].checked){
            correctAnswers++;
            $(`.q${question}result`).empty();
        } else{
            
            $(`.q${question}result`).html("<p class='jsp'>This is not the correct answer.</p>");
        }
    }; 

    $(".submitButton").click(function(){
        correctAnswers = 0;
        for (i = 0; i < answers.length; i++) {
            checkAnswer(i+1, answers[i]);
        }
        alert(`You got ${correctAnswers} out of ${answers.length} answers correct.`);
        
        $(".counter").text(correctAnswers);
        $("secTime").stop();
        $("minTime").Stop();

    
    });

        let second = 0
        let min = 0 
    $(".start").click(function(){
        let timer = setInterval(() => {
            second = second + 1; 
            if (second > 9) {
                $(".secTime").text(second);
            } else {
                $(".secTime").text('0'+ second);
            }

            if(second === 59){
                second = 0;
                min = min + 1;
                $(".minTime").text(min)
            }
        }, 1000);
        $(this).hide()
    });


})