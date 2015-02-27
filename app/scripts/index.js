'use strict';

var fb = new Firebase('https://battleship16.firebaseio.com/');
var board = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']];

$('button').on('click', function(){
  createBoard(board);
})

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

function findCoords(){
  $('td').one('click', function(){
  	var index = $('td').index(this).toString();
  	$(this).data(index, 'submarine');
    console.log($('td').index(this));
    fb.child('/Moves').push($(this).data());
  });
}