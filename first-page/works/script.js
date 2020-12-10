function ugad  ()
{ var answer1= document.getElementById("useranswer1").value;
	var answer2= document.getElementById("useranswer2").value;
var correctcountanswers = 0 ;
	function chekAnswers (question,useranswer)
	 {
	 	var answer = prompt (question);
	answer = answer.toLowerCase();
	  if (answer == useranswer) { 
        alert ("Вы Угадали"); 
        correctcountanswers++;
	  } 
	  else {
	  	 alert("НЕ правильно "); }	
	}
	   
     chekAnswers (answer1 ,"ель");
     chekAnswers (answer2 ,"огурец");
     alert (correctcountanswers);
}