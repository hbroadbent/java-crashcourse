//Challenge 1 Age in days
function ageInDays() {
 var birthyear = prompt('what year were you born in');
 var ageInDayss = (2019 - birthyear) * 365;
 var h1 = document.createElement ('h1');
 var textAnswer = document.createTextNode('you are '  + ageInDayss +  ' days old');
 h1.setAttribute('id', 'ageInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageInDays').remove();
}

// catGenerator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://pbs.twimg.com/media/BcvmxibIYAAH8a3.jpg"
    div.appendChild(image);
}

// Challenge 3: Rock Paper Scissors
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results)
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3)

}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice,computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]
    

    return [yourScore][computerScore];
}

function finalMessage(yourScore,computerScore) {
    if (yourScore===0) {
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore==0.5) {
            return {'message': 'You Tied', 'color':'yellow'}
        } else  {
            return {'message': 'You Won!', 'color':'green'}
        }
    }
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
    }
//lets remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 10px 10px 5px 0px blue'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + ";font-size: 60px; padding: 30px '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 10px 10px 5px 0px red'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}       
 //Challenge 4: Change the color of buttons
var all_buttons=document.getElementsByTagName('button');
 console.log(all_buttons)   
var copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[1].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green') {
    buttonsGreen();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random'){
    randomColors();
  }
}

function buttonsRed(); {
 for (let i=0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[1].classList[1]);
     all_buttons[i].classList.add('btn-danger');
 }
}

 function buttonsGreen(); {
 for (let i=0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[1].classList[1]);
     all_buttons[i].classList.add('btn-success');
    } 
}

function buttonColorReset();{
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[1].classList[1]);
        all_buttons[i].classList.add(copyAllButtons);
       } 
    }
function randomColors(); {
 var allButtons = document.getElementsByTagName('button');

 var choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success']

 for (let i=0; i < all_buttons.length; i++) {
     var randomNumber = Math.floor(Math.random() *4);
     allButtons[i].classList.remove(allButtons[1].classList[1]);
     all_buttons[i].classList.add(choices[randomNumber]);
 }
}
       
