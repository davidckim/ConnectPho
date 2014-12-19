var socket = io();

TURN_COUNTER = 0
CURRENT_PLAYER = ' red'

TIMEOUTID = null

$(document).ready(function() {
  $('.button').on('click', dropPiece);
  $('.clock').FlipClock(10, {
    countdown: true,
    clockFace: 'Counter',
    autoStart: true,
  });
  alert("Ready to play?");
  TIMEOUTID = window.setTimeout(dropPiece, 10000, {timeout:true});
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


var dropPiece = function(timeout) {
  window.clearTimeout(TIMEOUTID)
  var selectedColumn
  if (timeout.timeout) {
    var buttons = $('.button')
    selectedColumn = buttons[Math.floor(Math.random()*buttons.length)].parentNode
  } else {
    selectedColumn = this.parentNode;
  };
  var selectedCell = selectedColumn.children

  for(i=5; i >= 0; i--) {
    if (selectedCell[i].classList.contains('empty')) {
      $(selectedCell[i]).removeClass('empty')
      selectedCell[i].className += CURRENT_PLAYER
      TURN_COUNTER++
      switchPlayer();

      break
    };
  };
  $('.clock').FlipClock(10, {
    countdown: true,
    clockFace: 'Counter',
    autoStart: true,
  });
  TIMEOUTID = window.setTimeout(dropPiece, 10000, {timeout:true});
};

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
  $('.clock').FlipClock(10, {
    countdown: true,
    clockFace: 'Counter',
    autoStart: true,
  });
  TIMEOUTID = window.setTimeout(dropPiece, 10000, {timeout:true});
});