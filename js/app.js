'use strict'
$(document).ready(function(){

$( "form" ).on( "submit", false );
/* global variables */
var gCount = 0;
var gRandomNumber = Math.floor(Math.random() * 100);
var userGuessesArr = [];

/*console.log(gRandomNumber);*/

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('.new').click(function () {
  		console.log('new clicked');
  		/*$('form').submit();*/
  		newGame();
  	});

  	/* -- register some events */

 	$('#guessButton').on('click',function(){
  		console.log($('#userGuess').val());
  		console.log('gCount' + gCount);
      /* testing the some */
      if ($('#userGuess').val() % 1 !== 0){
        alert('please input a number');
        return true;
      }
  		else if ($('#userGuess').val() < 0 || $('#userGuess').val() > 100){ 
        alert('Choose an integer between 0 and 100.');   
  	  }
      else if (userGuessesArr.length > 0 && userGuessesArr.some(checkNumber)){
        $('#userGuess').val('');
        $('#userGuess').focus();
        alert('This number was already given');
      }     
      else {  
        var appendStuff = '<li>' + $('#userGuess').val() + '</li>';
        $('#guessList').append(appendStuff);
        gCount += 1;
        $('#count').text(gCount); 
        guessFeedback(gRandomNumber ,$('#userGuess').val());
        userGuessesArr.push($('#userGuess').val());
        $( "form" ).on( "submit", function( event ) {
               event.preventDefault();
        });
        $('#userGuess').val('');
        $('#userGuess').focus();
      }   
  	});

    function guessFeedback(randomNumber, guessNumber){
    	console.log('randomNumber' + randomNumber +  'guessNumber' + guessNumber );
        var diff = Math.abs(randomNumber - guessNumber); 
    	console.log('diff' + diff);
    	if (diff > 50 )
    	   { $('#feedback').text('Ice Cold');}
    	else if (diff > 25)
    	   { $('#feedback').text('Cold');}
        else if (diff > 15)
    	   { $('#feedback').text('Warm');}
    	else if (diff > 10)
    	   { $('#feedback').text('Hot');}
        else if (diff > 5)
    	   { $('#feedback').text('Very Hot');}
    	else if (diff >= 1)
    	   { $('#feedback').text('Auch!');}
    	else if (diff == 0)
    	   { $('#feedback').text('You guessed the number!');}

    };

  	function newGame(){
       gCount = resetCounter();
       gRandomNumber = Math.floor(Math.random() * 100);
       console.log(gRandomNumber);
       $('#count').text(gCount);
       $('#feedback').text('Make your Guess!');
       $('#guessList li').remove();
       $('#userGuess').val('');
       userGuessesArr = [];
  	};
    
    function resetCounter( ) {
      return 0;
    }

   function checkNumber(num) {
     return num == $('#userGuess').val();
   }

});
