describe('the greetings function basic test', function(){
    it('greetings function test greeting in English', function(){

        var theGreetingsVar = GreetingsFactory();

        assert.equal(theGreetingsVar.GreetingTheLogic('Richard',"english"),"HELLO RICHARD");
    });
    it('greetings function test greeting in Afrikaans', function(){
        var theGreetingsVar = GreetingsFactory();

        assert.equal(theGreetingsVar.GreetingTheLogic('Richard',"afrikaans"),"GOEIE DAG RICHARD");
    });
    it('greetings function test greeting in isiXhosa', function(){
        var theGreetingsVar = GreetingsFactory();

        assert.equal(theGreetingsVar.GreetingTheLogic('Richard',"isiXhosa"),"USUKU OLUMNWANDI RICHARD");     
    });
});
describe('the greetings function testing the counter', function(){
    it('greetings function should test is incremented by 1', function(){
        var storedUsers = [{'Richard':0}]

        var theGreetingsVar = GreetingsFactory(storedUsers);

        assert.equal(theGreetingsVar.TheGreetCounter(),1);
    });
    it('greetings function should test if the same name should stay one', function(){
        var storedUsers = [{'Richard':0},]

        var theGreetingsVar = GreetingsFactory(storedUsers);

        assert.equal(theGreetingsVar.TheGreetCounter(),1);
    });
    it('greetings function should if the it has three different names, should return three', function(){
        var storedUsers = [{'Aya':0}, {'mike':0}, {'Sibo':0}]

        var theGreetingsVar = GreetingsFactory(storedUsers);

        assert.equal(theGreetingsVar.TheGreetCounter(),3);
    });
});

describe('', function(){

});