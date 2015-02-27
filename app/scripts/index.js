'use strict';

var fb = new Firebase('https://battleship16.firebaseio.com/');
var b;

$('button').on('click', function(){
  createBoard();
})

function createBoard (b) {
  b = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]
  var $table = $('<table class="class"></table>');
  b.forEach(function (row) {
    var $tr = $('<tr></tr>');
    row.forEach(function (cell){
      $tr.append($('<td></td>'));
      $table.append($tr);
    });
  });
  $('.board').append($table);
}