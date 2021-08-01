describe('isFromBellville function' , function(){

    it('should return "itemName", that starts with CY', function(){
        assert.equal(isFromBellville('CY 123'), true);
    }),
    
    it('should return "itemName", that starts with CY', function(){
    assert.equal(isFromBellville('CJ 123'), false);
    })
})
