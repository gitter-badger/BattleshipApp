'use strict';

var fb = new Firebase('https://battleship16.firebaseio.com/');
var board  = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']];
var board2  = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']];

$(document).ready(function () {

});

$('button').one('click', function(){
  createBoard(board);
  createBoard(board2);
  chooseShip();
  //firebaseBoard();
});

function createBoard (tableData) {
  var $table = $('<table></table>');
  tableData.forEach(function (row) {
    var $tr = $('<tr></tr>');
    row.forEach(function (cell){
      $tr.append($('<td></td>'));
      $table.append($tr);
    });
  });
  $('.board').append($table);
  findCoords();
}

function chooseShip () {
  $('td').one('click', function() {
    $(this).append('s');
  })
}


// function firebaseBoard() {
//   var fbBoard = ({ board: ['','','','','','','','','','','','','','','','','','','','','','','','',''] });
//   fb.child('game/').push(fbBoard);
// }

function findCoords(){
  $('td').one('click', function(){
  	var index = $('td').index(this).toString();
  	$(this).data(index, 'submarine');
    console.log($('td').index(this));
    fb.child('/Moves').push($(this).data());
  });
}
