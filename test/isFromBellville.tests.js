describe('The isFromBellville function' , function(){
    it('should return "registrationNumber" that startsWith CY' , function(){

        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);

    
    });

});
