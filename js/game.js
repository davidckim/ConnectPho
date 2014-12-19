var socket = io();

TURN_COUNTER = 0
CURRENT_PLAYER = ' red'

$(document).ready(function() {
  $('.button').on('click', dropPiece);
});

var switchPlayer = function() {
  if (TURN_COUNTER % 2 == 0) {
    CURRENT_PLAYER = ' red'
  } else {
    CURRENT_PLAYER = ' black'
  };
  $("#player").html("PLAYER " + CURRENT_PLAYER.toUpperCase() + "'S TURN!" )
  game.checkGameOver();
};

var dropPiece = function() {

  var selectedColumn = this.parentNode;
  var selectedCell = selectedColumn.children

  for(i=5; i >= 0; i--) {
    if (selectedCell[i].classList.contains('empty')) {
      $(selectedCell[i]).removeClass('empty')
      selectedCell[i].className += CURRENT_PLAYER
      TURN_COUNTER++
      switchPlayer();
      break
    }
  }
}

$('.button').on('click', function(event) {
  // pass in string of the column we clicked on
  var columnName = event.target.parentNode.className;

  socket.emit('dropPieceFunction', columnName );
  console.log("im in here")

});


socket.on('clicked', function (msg) {
  var selectedColumn = $("." + msg)[0];
  var selectedCell = selectedColumn.children

  for(i=5; i >= 0; i--) {
    if (selectedCell[i].classList.contains('empty')) {
      $(selectedCell[i]).removeClass('empty')
      selectedCell[i].className += CURRENT_PLAYER
      TURN_COUNTER++
      switchPlayer();
      break
    }
  }
   
});







