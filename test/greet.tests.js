describe('The greet function' , function(){

    it('should should return "Hello, Madoda", when I greet Madoda', function(){
        assert.equal('Hello, Madoda', greet('Madoda'));
    });

    it('should should return "Hello, Lindani", when I greet Lindani', function(){
        assert.equal('Hello, Lindan', greet('Lindani'));
    });

    it('should should return "Hello", when no name is entered', function(){
        assert.equal('Hello', greet());
    });
    
});