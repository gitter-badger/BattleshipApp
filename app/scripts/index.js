'use strict';

var fb = new Firebase('https://xogame.firebaseio.com/'),
    fbusers = new Firebase('https://xogame.firebaseio.com/users'),
    fbgames = new Firebase('https://xogame.firebaseio.com/games');


var currentGame,userRaw,userIndex,userShort;

//if user authenticated, find username
if(fb.getAuth()){
  userRaw = fb.getAuth().password.email;
  userIndex = userRaw.indexOf('@');
  userShort = userRaw.substr(0,userIndex);
} else {}

  /////push game data to fb
  function createGame(user){
    var newGameData = {'user1': user, 'user2': '', 'gameboard': [0, 0, 0, 0, 0, 0, 0, 0, 0], 'gameover': false, 'symbol': 'X'};
    fbgames.push(newGameData);
    findGameId();
    return newGameData;
  }
   
  $('form').submit(function(){
  fb.child('/Games').push(({'board': board, 'player1': false, 'player2': false, 'turn': ''}));
})