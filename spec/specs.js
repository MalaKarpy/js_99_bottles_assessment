describe('pigLatin', function(){

    it("it adds 'ay' to the end of a word if it starts with a vowel", function(){
        expect(pigLatin('apple')).to.equal('appleay');
    });

});

// it("it splits the word at the adds 'ay' to the end of a word if it starts with a consonant,", function(){
//     expect(pigLatin('a')).to.equal('aay');
// });
