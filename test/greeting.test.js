describe('the greetings function basic test', function(){
    it('greetings function test webApp', function(){
        var theGreetingsVar = greetingsFactory('greg');

        theGreetingsVar.greetingTheLogic();

        assert.equal(theGreetingsVar.returnMap('greg'));

    });
    // it('2', function(){
    //     var theGreetingsVar = greetingsFactory(name,langChosen);

    //     theGreetingsVar.theGreetCounter('ross',"english");

    //     assert.equal(theGreetingsVar.greetingTheLogic('Greg', 'Hello '));

    // });
    // it('3', function(){
    //     var theGreetingsVar = greetingsFactory(name,langChosen);

    //     theGreetingsVar.greetingTheLogic('greg',"english");
    //     theGreetingsVar.greetingTheLogic('greg',"isiXhosa");
        
    //     assert.equal(theGreetingsVar.greetingTheLogic('Greg', 'Hello '));

    // });
});