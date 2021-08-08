describe('The isFromBellville function' , function(){
    it('should return "regNo" that startsWith CY', function(){

        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false)
    
    });
});
