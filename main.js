$(document).ready( function() {
  
  $('.choice').click(function(){
    var choice = $(this).attr('id')
    console.log(choice)
    var rand = compPlay();
    var result = winLose(choice, rand);
    $('#results').html( "You chose " + choice + ".<br/> Computer chose " + rand + ".<br/> You " + result + ".");
  });
  

  function compPlay() {
    var computerChoice = ["rock", "paper", "scissors"]; 
    var rand = computerChoice[Math.floor(Math.random() * computerChoice.length)]; 
    console.log(rand)
    
    return rand;
  }

  function winLose(player, computer) {
    var result;
    if (player == computer){
        result = "tied";
    }
    else if((player == "rock" && computer == "paper") ||
            (player == "paper" && computer == "scissors") ||
            (player == "scissors" && computer == "rock")){
        result = "lose";
    }
    else {
        result = "win"
    }

    return result;
  }
});