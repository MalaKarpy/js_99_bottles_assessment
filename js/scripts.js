var pigLatin = function(string) {
  //var vowels = ["a","e","i","o","u"];
  var vowels = "aeiou";
  var vowels_exp = /[a|e|i|o|u]/g;
  var firstLetter = string.charAt(0);
  var check_qu = string.slice(0,2);

  if ((vowels.indexOf(firstLetter)) === 0) {
    string = string + "ay";
  }

  else if (check_qu === "qu") {
    string = string.slice(2)+"quay";
  }

  else {
    var match_result = string.match(/[a|e|i|o|u]/g);
    var result = string.indexOf(match_result[0]);
    var string = string.slice(result) + string.slice(0, result) +"ay";
  }

  return string;
};

$(function() {
    $("form#pig-latin").submit(function(event) {
      var piglatinWord = $("input#word").val()


    var translatedWord = pigLatin(piglatinWord);

    $(".answer").text(translatedWord);

    event.preventDefault();
  });

});
