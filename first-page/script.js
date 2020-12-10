function ugad() { var answer1= document.getElementById("useranswer1").value;
	var answer2= document.getElementById("useranswer2").value;
    var correctcountanswers = 0 ;
	function chekAnswers (question,useranswer)
                {
	 	var answer = question;
	answer = answer.toLowerCase();
	  if (answer == useranswer) { 
        correctcountanswers++;
	  } else {  }	
	}
	   
     chekAnswers (answer1 ,"ель");
     chekAnswers (answer2 ,"огурец");
     alert ("Кол-во правильных ответов: "+correctcountanswers);
}


/*function getRandom(a) { 
	a=0;
      var a =  parseInt ( Math.random ()*100);
      alert (a);
	  return  a;
}


*/
var answer = parseInt(Math.random() * 100);
function guesnum(numberOfPlayers) {
    var userAnswer = document.getElementById("nuber1").value;
    
	userAnswer = parseInt(userAnswer);
	
		if (userAnswer > answer) {
			alert (" Ваш ответ слишком большой!");
		} else if (userAnswer < answer) {
			alert ("Ваш ответ слишком маленький!");
		} else if (userAnswer == answer) {
			alert (" Вы угадали!");
			
		} else {
			alert ("нужно было ввести число...")
		}
	
		
	}



    function playGuess(numberOfPlayers) {
        var UserName = [];
        if (numberOfPlayers == 1) {
            UserName[0] = prompt("Введите имя игрока:");
        } else {
            for (var i = 0; i < numberOfPlayers; i++) {
                UserName[i] = prompt("Введите имя игрока " + (i + 1) + ":");
            }
        }
       
        var currentUser = 0;
    
        
        var answer = parseInt(Math.random() * 100);
       
        while (true) {
            var userAnswer = prompt(UserName[currentUser] + ", введите число от 0 до 100\n(чтобы выйти из игры, нажмите q)");
            if (userAnswer == "й" || userAnswer == "q") {
                break;  // выход из цикла
            }
            userAnswer = parseInt(userAnswer);
        
            if (userAnswer > answer) {
                alert(UserName[currentUser] + ", Ваш ответ слишком большой!");
            } else if (userAnswer < answer) {
                alert(UserName[currentUser] + ", Ваш ответ слишком маленький!");
            } else if (userAnswer == answer) {
                alert(UserName[currentUser] + ", Вы угадали!");
                break;
            } else {
                alert(UserName[currentUser] + ", нужно было ввести число...")
            }
            currentUser++;
            if (currentUser == numberOfPlayers) {
                currentUser = 0;
            }
        }
    }
    