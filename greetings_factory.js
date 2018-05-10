function greetingsFactory(storedUsers){
  var namesStored = {};
  var greetCount = 0;
  var holdName = "";
  var greet = '';
  function greetingTheLogic(name, langChosen){

        if(storedUsers){
          namesStored = storedUsers;
        }

        if (name != "") {
            holdName = name;
            //localStorage['holdName'] = namesStored;
            if (namesStored[holdName] === undefined){
            greetCount++;

            namesStored[holdName] = 1;
             //localStorage['greetNumber'] = greetCount;
            }
        }
        if (langChosen == 'english'){
          greet = 'Hello '+ holdName;
        }else if(langChosen == 'afrikaans'){
          greet = 'Goeie dag ' + holdName;
        }else if (langChosen == 'isiXhosa'){
          greet = 'Usuku olumnwandi ' + holdName;
        }
    return greet;
  }

  function theGreetCounter(){
    return Object.keys(namesStored).length;
  }

  function returnMap(){
    return namesStored;
  }  
  function clear(){
    namesStored ={};
   localStorage.clear();
  }
  function returnsGreetings(){
    return greet;
  }

  return{
    greetingTheLogic,
    theGreetCounter,
    returnMap,
    clear,
    returnsGreetings
  };

}
