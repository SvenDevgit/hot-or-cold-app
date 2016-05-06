/*'use strict'*/
$(document).ready(function(){
/*	
$("form").submit(function(){
    alert("Submitted");
});
*/ 	

$( "form" ).on( "submit", false );
/*
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
});
*/
/* global variables */
var gCount = 0;
var gRandomNumber = Math.floor(Math.random() * 100);

console.log(gRandomNumber);

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
/*
  	$('#guessButton').on('click', function() {
  		console.log($('#userGuess').val());

  	});
*/
  	$('#guessButton').on('click',function(){
  		console.log($('#userGuess').val());
  		var appendStuff = '<li>' + $('#userGuess').val() + '</li>';
        $('#guessList').append(appendStuff);
        gCount += 1;
        $('#count').text(gCount);
        guessFeedback(gRandomNumber ,$('#userGuess').val());
  	});




});

    function guessFeedback(randomNumber, guessNumber){
    	console.log('randomNumber' + randomNumber +  'guessNumber' + guessNumber );
        var diff = Math.abs(randomNumber - guessNumber); 
    	console.log('diff' + diff);
    	if (diff > 50 )
    	   { $('#feedback').text('Ice Cold');
    	   }
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

  	function addGuess(){
  	   console.log('itemValue');
  	   /*	
       var appendStuff = '<li>' + itemValue + '</li>';
       $('#guessList').append(appendStuff);*/
  	};

  	function newGame(){
       gCount = 0;
       gRandomNumber = Math.floor(Math.random() * 100);
       console.log(gRandomNumber);
       $('#count').text(gCount);
       $('#feedback').text('Make your Guess!');
       $('#guessList li').remove();
       $('#userGuess').val('');
  	};

