$('.newgame').on('click', function(){
	var tr = '<tr><td></td><td></td><td></td><td></td><td></td></tr>';
	$('.container').append($('<table class="board"><tbody>' + tr + tr + tr + tr + tr + '</tbody></table>'));
});