describe("numberOfBottlesSong", function() {
  it("return lyrics with the 3 number of bottles", function() {
    var output = "3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall.";
    expect(numberOfBottlesSong(3)).to.equal(output);
  });

  it("return lyrics with the 2 number of bottles", function() {
    var output = "2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottles of beer on the wall.";
    expect(numberOfBottlesSong(2)).to.equal(output);
  });

  it("return lyrics with the 1 number of bottle", function() {
    var output = "1 bottles of beer on the wall, 1 bottles of beer. Take one down and pass it around, 0 bottles of beer on the wall.";
    expect(numberOfBottlesSong(1)).to.equal(output);
  });

});

