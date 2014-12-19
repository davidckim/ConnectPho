var socket = io();
var Game = function() {};

Game.prototype = {
  checkIfWin: function(arrayOfNodes) {
    var current_count = 0;
    var winner = null
    var game = this
    var color
    if (arrayOfNodes.length > 1) {
      $.each(arrayOfNodes, function(index, node) {
        current_count = game.checkIfEmpty(node, index, arrayOfNodes, current_count);
      });
    };
  },
  checkIfEmpty: function(node, index, arrayOfNodes, current_count) {
    if ($(node[0]).attr('class').slice(6) != "empty") {
      current_count = game.checkIfRepeat(arrayOfNodes, $(node[0]).attr('class').slice(6), current_count, index);
    } else {
      current_count = 1
    };
    return current_count
  },
  checkIfRepeat: function(arrayOfNodes, color, current_count, index) {
    if ($($(arrayOfNodes[index-1])[0]).hasClass(color)) {
      current_count += 1;
      if (current_count == 4) {
        game.gameOver(color);
      };
    } else {
      current_count = 1
    };
    return current_count
  },
  gameOver: function(winner) {
      alert(winner + " wins!");
  },
  checkAllArrays: function(arrayOfArrays) {
    arrayOfArrays.forEach(this.checkIfWin.bind(this));
  },
  checkGameOver: function() {
    this.checkAllArrays(this.createRows());
    this.checkAllArrays(this.createColumns());
    this.checkAllArrays(this.createTopDiagonals());
    this.checkAllArrays(this.createRightDiagonals());
    this.checkAllArrays(this.createBottomDiagonals());
    this.checkAllArrays(this.createLeftDiagonals());
  },
  createRows: function() {
    var rows = []
    for (var i = 0; i <= 5; i++) {
      var r = $('.board').find('.r' + i)
      row = []
      $.each(r, function(index, node) {
         row.push($(node))
      });
      rows.push(row)
    };
    return rows
  },
  createColumns: function() {
    var columns = []
    for (var i = 0; i <= 6; i++) {
      var col = $('.board').find('.c' + i)
      column = []
      $.each(col, function(index, node) {
         column.push($(node))
      });
      columns.push(column)
    };
    return columns
  },
  createTopDiagonals: function() {
    var diagonals = []
    for (var i = 0; i <= 6; i++) {
      var diagonal = []
      var col = i
      var row = 5
      while (row >= 0 && col >= 0) {
        diagonal.push($(document.querySelector(".r" + row + ".c" + col)));
        row --
        col --
      };
      diagonals.push(diagonal)
    };
    return diagonals
  },
  createRightDiagonals: function() {
    var diagonals = []
    for (var i = 5; i >= 0; i--) {
      var diagonal = []
      var col = 6
      var row = i
      while (row >= 0 && col >= 0) {
        diagonal.push($(document.querySelector(".r" + row + ".c" + col)));
        row --
        col --
      };
    diagonals.push(diagonal)
    };
    return diagonals
  },
  createBottomDiagonals: function() {
    var diagonals = []
    for (var i = 6; i >= 0; i--) {
      var diagonal = []
      var col = i
      var row = 5
      while (row >= 0 && col <= 6) {
        diagonal.push($(document.querySelector(".r" + row + ".c" + col)));
        row --
        col ++
      };
    diagonals.push(diagonal)
    };
    return diagonals
  },
  createLeftDiagonals: function() {
    var diagonals = []
    for (var i = 5; i >= 0; i--) {
      var diagonal = []
      var col = 0
      var row = i
      while (row >= 0 && col <= 6) {
          diagonal.push($(document.querySelector(".r" + row + ".c" + col)));
          row --
          col ++
      };
    diagonals.push(diagonal)
    };
    return diagonals
  },
};

game = new Game();