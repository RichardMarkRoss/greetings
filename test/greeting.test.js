describe('the greetings function basic test', function(){
    it('greetings function test webApp', function(){
        var theGreetingsVar = greetingsFactory();
                                                    
        assert.equal(theGreetingsVar.greetingTheLogic('greg',"english"),"Hello greg");
        assert.equal(theGreetingsVar.theGreetCounter(),1);
    });
});