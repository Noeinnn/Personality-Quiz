// Global Variables
var resultFinal = 0;		// Variable that stores the sum of the results from
var resultTally = [];		// Array for storing the answers as a String value of A, B, C, D.


// Start Button
var startButton = document.getElementById( "startButton" );	
startButton.addEventListener( "click", startClick );


/* 	startClick()
	Triggered when the user clicks the start button.  Hides
    the introduction and shows question 1.
    parameters: none
    returns: none
*/
function startClick() {
		    
	var intro = document.getElementById( "intro" );
    intro.style.display = "none";
	
    var question1 = document.getElementById( "q1_display" );
    q1_display.style.display = "block";
}


var questionList = document.getElementsByClassName( "answers" );	// Adding an event listener to everything with the Class of "answers".
for(var i=0;i<questionList.length; i++)
{
		questionList[i].addEventListener( "click", recordAnswer );	// The listener listens to the input of "click" and then runs the function recordAnswer.
}



/* 	recordAnswer()
	This function hides the question that the user has responded to then displays the next question until they reach the end. 
	After a user responds to question 6, the result page is then shown. There are four result pages, and only one is shown depending on how the user responds.
	At the bottom of the page is an explanation on how the results are calculated.
    parameters: event
    returns: none
*/
function recordAnswer( event )			// event is a variable that gets created whenever the event is run
{	
	
	if( event.target.id == "id_one" ) {	// if the event happens where the ID is "id_one" then the following runs. 
		resultFinal += 1;		// the variable resultFinal has 1 added to it as a number value. 
		resultTally.push( " A" )		// the sting " A" is added the array resultTally, which is then displayed at the results page at the end. 
	 }
	
	if( event.target.id == "id_two" ) {
		 resultFinal  += 2;		// Depending on the response, the value of the number added changes. So "id_two" results in the addition of 2
		 resultTally.push( " B" ) 	// 	and the adding of the string " B" into the array.
	}
	
	if( event.target.id == "id_three" ) {
		resultFinal  += 3;
		resultTally.push( " C" )
	}
	
	if( event.target.id == "id_four" ) {
		resultFinal  += 4;
		resultTally.push( " D" )
	}
	
	
	if( event.target.parentElement.id == "q1" ) {	// if the event happens in the ID of "q1", then run the following. 
		var hideQuestion = document.getElementById( "q1_display" );	
    	q1_display.style.display = "none";		// hide Question 1
	
		 var displayNext = document.getElementById( "q2_display" );		
  		 q2_display.style.display = "block";		// display Quesion 2
	}
		 
		 
	 if( event.target.parentElement.id == "q2" ) {	// This if( ) is similar to the above if( ) except it hides Question 2 and displays Question 3. The following if( ) all are similar.
		var hideQuestion = document.getElementById( "q2_display" );	
    	q2_display.style.display = "none";
		
		 var displayNext = document.getElementById( "q3_display" );		
  		 q3_display.style.display = "block";
	}

	 if( event.target.parentElement.id == "q3" ) {
		var hideQuestion = document.getElementById( "q3_display" );	
    	q3_display.style.display = "none";
		
		 var displayNext = document.getElementById( "q4_display" );		
  		 q4_display.style.display = "block";
	}
		
	 if( event.target.parentElement.id == "q4" ) {
		var hideQuestion = document.getElementById( "q4_display" );	
    	q4_display.style.display = "none";
		
		 var displayNext = document.getElementById( "q5_display" );		
  		 q5_display.style.display = "block";
	}
	
	 if( event.target.parentElement.id == "q5" ) {
		var hideQuestion = document.getElementById( "q5_display" );	
    	q5_display.style.display = "none";
		
		 var displayNext = document.getElementById( "q6_display" );		
  		 q6_display.style.display = "block";
	}
		
	 if( event.target.parentElement.id == "q6" ) {
		var hideQuestion = document.getElementById( "q6_display" );	
    	q6_display.style.display = "none";
		
		
// RESULTS DISPLAY
// the previous additions to resultFinal made by the responses of the user are used to decide which result page to display. 	
		if(resultFinal <= 10 ) {	 // if resultFinal recorded a number value less then or equal to 10, then result page 1 is displayed. 		 
		 var displayNext = document.getElementById( "r1" );		
  		 r1.style.display = "block";
		 document.getElementById( "resultArray1" ).innerHTML = "You answered: " + resultTally; 	// from the responses recorded by the array resultTally, they are displayed on the results page. 
		}
		
		else if(resultFinal <= 14 ) {		 										 
		 var displayNext = document.getElementById( "r2" );		
  		 r2.style.display = "block";
		 document.getElementById( "resultArray2" ).innerHTML = "You answered: " + resultTally; 	
		}
		
		else if(resultFinal <= 19 ) {	 		 
		 var displayNext = document.getElementById( "r3" );		
  		 r3.style.display = "block";
		 document.getElementById( "resultArray3" ).innerHTML = "You answered: " + resultTally; 	
		}
		
		else if(resultFinal <= 24 ) {	 		 
		 var displayNext = document.getElementById( "r4" );		
  		 r4.style.display = "block";
		 document.getElementById( "resultArray4" ).innerHTML = "You answered: " + resultTally; 	
		}				 
	}
}	

/* 
How the results are calculated:

if a user clicks:
A.		resultFinal +=1
B. 		resultFinal +=2
C.		resultFinal +=3
D.		resultFinal +=4

Once they have answered all 6 questions, the result number determines what result page is shown.

result 1 =< 8
result 2 =< 13
result 3 =< 19
result 4 =< 24


result 1:	Away (feat. Beenzino) - Primary
result 2:	Spoiler - Epik High
result 3:	Tomorrow - BTS
result 4:	Question Mark - Primary
*/




