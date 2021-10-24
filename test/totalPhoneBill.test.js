describe('The totalPhoneBill function' , function(){

    it('should return totalPhoneBill', function(){
            assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
            assert.equal('R3.40', totalPhoneBill('call, sms'));
            assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})