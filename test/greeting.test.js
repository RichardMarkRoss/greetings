describe('the greetings function basic test', function(){
    it('greetings function test greeting in English', function(){
        var theGreetingsVar = greetingsFactory();

        assert.equal(theGreetingsVar.greetingTheLogic('Richard',"english"),"HELLO RICHARD");
    });
    it('greetings function test greeting in Afrikaans', function(){
        var theGreetingsVar = greetingsFactory();

        assert.equal(theGreetingsVar.greetingTheLogic('Richard',"afrikaans"),"GOEIE DAG RICHARD");
    });
    it('greetings function test greeting in isiXhosa', function(){
        var theGreetingsVar = greetingsFactory();

        assert.equal(theGreetingsVar.greetingTheLogic('Richard',"isiXhosa"),"USUKU OLUMNWANDI RICHARD");     
    });
});
describe('the greetings function testing the counter', function(){
    it('greetings function should tet is incremented by 1', function(){
        var theGreetingsVar = greetingsFactory();

        theGreetingsVar.greetingTheLogic('Richard',"english");

        assert.equal(theGreetingsVar.theGreetCounter(),1);
    });
    it('greetings function should test if the same name should stay one', function(){
        var theGreetingsVar = greetingsFactory();

        theGreetingsVar.greetingTheLogic('Richard',"afrikaans");
        theGreetingsVar.greetingTheLogic('Richard',"english");

        assert.equal(theGreetingsVar.theGreetCounter(),1);
    });
    it('greetings function should if the it has three different names, should return three', function(){
        var theGreetingsVar = greetingsFactory();

        theGreetingsVar.greetingTheLogic('mike',"english");
        theGreetingsVar.greetingTheLogic('Aya',"afrikaans");
        theGreetingsVar.greetingTheLogic('Sibo',"isiXhosa");

        assert.equal(theGreetingsVar.theGreetCounter(),3);
    });
});