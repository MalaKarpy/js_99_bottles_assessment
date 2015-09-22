var numberOfBottlesSong = function(numberBottles) {

    //debugger;

    var i = numberBottles;
    var totalNumber_bottles = numberBottles;
    var partOfSentence1 = " bottles of beer on the wall, ";
    var partOfSEntence2 = " bottles of beer. Take one down and pass it around, ";
    var partOfSEntence3 = " bottles of beer on the wall.";
    var song = 0;
    var oneLessBottle = i - 1;
    var outputSong = 0;

     outputSong = i + partOfSentence1 + i + partOfSEntence2  +  oneLessBottle + partOfSEntence3;

     if(i === 0){
      var partOfSentence4 = " No more";
      var partOfSentence5 = " bottles of beer.";
      var partOfSentence6 = " Go to the store and buy some more,"
      //var zeroLyrics = 0;
      outputSong = partOfSentence4 + partOfSentence1 + partOfSentence4 + partOfSentence5 + partOfSentence6 + totalNumber_bottles + partOfSEntence3;
     }

     return outputSong;
};

$(function() {
     $("form#bottles-song").submit(function(event) {
       var numberBottles = $("input#totalBottles").val()

       for(var i=numberBottles; i>=0; i--){
          $(".answer").append(numberOfBottlesSong(i) + "<br/>");
       }
       event.preventDefault();
     });
});
