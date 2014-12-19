describe("Game", function() {

  describe("checkIfWin", function() {

    it("returns 'black wins!!' if given an array with four black nodes in a row", function() {
    var testArray = ['<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>'];
    expect(game.checkIfWin(testArray)).toBe("black wins!");
    });

    it("returns 'red wins!!' if given an array with four black nodes in a row", function() {
    var testArray = ['<div class="c1 r1 red"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>'];
    expect(game.checkIfWin(testArray)).toBe("red wins!");
    });

    it("does not return anything if given an array without four nodes in a row", function() {
    var testArray = ['<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>'];
    expect(game.checkIfWin(testArray)).toBeUndefined();
    });
  });

  describe("checkAllArrays", function() {
    it("iterates through all arrays and calls checkIfWin on all of them", function() {
        spyOn(game, 'checkIfWin');
        hugeArray = [['<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>'],['<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>'],['<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>'],['<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>'],['<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 black"></div>', '<div class="c1 r1 red"></div>', '<div class="c1 r1 black"></div>']];
        game.checkAllArrays(hugeArray);
        expect(game.checkIfWin).toHaveBeenCalled();
        expect(game.checkIfWin.calls.count()).toEqual(5);
    });
  });

  describe("Check Rows/Columns/Diagonals", function() {

    beforeEach(function() {
      var board = '<div class="board"><div class ="column1"><div class ="c1 r1 empty"></div><div class ="c1 r2 empty"></div><div class ="c1 r3 empty"></div><div class ="c1 r4 empty"></div><div class ="c1 r5 empty"></div><div class ="c1 r6 empty"></div><div class ="button1"></div></div><div class ="column2"><div class ="c2 r1 empty"></div><div class ="c2 r2 empty"></div><div class ="c2 r3 empty"></div><div class ="c2 r4 empty"></div><div class ="c2 r5 empty"></div><div class ="c2 r6 empty"></div><div class ="button2"></div></div><div class ="column3"><div class ="c3 r1 empty"></div><div class ="c3 r2 empty"></div><div class ="c3 r3 empty"></div><div class ="c3 r4 empty"></div><div class ="c3 r5 empty"></div><div class ="c3 r6 empty"></div><div class ="button3"></div></div><div class ="column4"><div class ="c4 r1 empty"></div><div class ="c4 r2 empty"></div><div class ="c4 r3 empty"></div><div class ="c4 r4 empty"></div><div class ="c4 r5 empty"></div><div class ="c4 r6 empty"></div><div class ="button4"></div></div><div class ="column5"><div class ="c5 r1 empty"></div><div class ="c5 r2 empty"></div><div class ="c5 r3 empty"></div><div class ="c5 r4 empty"></div><div class ="c5 r5 empty"></div><div class ="c5 r6 empty"></div><div class ="button5"></div></div><div class ="column6"><div class ="c6 r1 empty"></div><div class ="c6 r2 empty"></div><div class ="c6 r3 empty"></div><div class ="c6 r4 empty"></div><div class ="c6 r5 empty"></div><div class ="c6 r6 empty"></div><div class ="button6"></div></div><div class ="column7"><div class ="c7 r1 empty"></div><div class ="c7 r2 empty"></div><div class ="c7 r3 empty"></div><div class ="c7 r4 empty"></div><div class ="c7 r5 empty"></div><div class ="c7 r6 empty"></div><div class ="button7"></div></div></div>'
    });

    describe("createRows", function() {
      it("returns an array of arrays when given a formatted game board", function() {
        expect(game.createRows()).toEqual(jasmine.any(Array));
      });
    });

    describe("createColumns", function() {
      it("returns an array of arrays when given a formatted game board", function() {
        expect(game.createRows()).toEqual(jasmine.any(Array));
      });
    });

    describe("createTopDiagonals", function() {
      it("returns an array of arrays when given a formatted game board", function() {
        expect(game.createRows()).toEqual(jasmine.any(Array));
      });
    });

    describe("createRightDiagonals", function() {
      it("returns an array of arrays when given a formatted game board", function() {
        expect(game.createRows()).toEqual(jasmine.any(Array));
      });
    });

    describe("createBottomDiagonals", function() {
      it("returns an array of arrays when given a formatted game board", function() {
        expect(game.createRows()).toEqual(jasmine.any(Array));
      });
    });

    describe("createLeftDiagonals", function() {
      it("returns an array of arrays when given a formatted game board", function() {
        expect(game.createRows()).toEqual(jasmine.any(Array));
      });
    });
  });
});
