describe('The greet function' , function(){

    it('should return "Hello, Madoda", when I greet Madoda', function(){
        assert.equal('Hello, Madoda', greet('Madoda'));
    });
    
    it('should return "Hello", when no name is entered', function(){
        assert.equal('Hello', greet());
    });
    
});