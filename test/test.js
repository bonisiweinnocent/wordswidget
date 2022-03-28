describe('The words-widget factory function', function () {
    it('should be able take a sentence and display it', function () {
        var theApp = word();
       

        theApp.sentence("Good morning world")
       
        assert.equal("",theApp.getSentences());


    });
    
    it('should count words in a sentence', function () {
        var theApp = word();
       
   
        theApp.sentence("Good morning world")
       
        assert.equal(3,theApp.showHowmManyWords());
   
   
    });
    it('should be able to return longest word', function () {
        var theApp = word();
       
   
        theApp.sentence("Good morning world")
       
        assert.deepEqual([ 'morning' ],theApp.highlightLongest());
   
   
    });
    it('should be able to return words longer than 5 charecters', function () {
        var theApp = word();
       
   
        theApp.sentence("Alicia is the best student in class ")
       
        assert.deepEqual('    Alicia     student  ',theApp.longerThanFive());
   
   
    });
    
    

});
