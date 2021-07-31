describe('The greet function' , function(){

    it('should return "Hello, Madoda", when I greet Madoda', function(){
        assert.equal('Hello, Madoda', greet('Madoda'));
    });

    it('should return "Hello, Lindani", when I greet Lindani', function(){
        assert.equal('Hello, Lindani', greet('Lindani'));
    });

    it('should return "Hello", when no name is entered', function(){
        assert.equal('Hello', greet());
    });
    
});