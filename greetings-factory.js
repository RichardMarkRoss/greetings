function greetingsFactory(storedUsers){
  var namesStored = {};
  var greetCount = 0;
  var holdName = "";
  var greet = '';
  function greetingTheLogic(name, langChosen){
   
    

        if(storedUsers){
          namesStored = storedUsers;
        }

        if (name != ""){
            
            holdName = name.toUpperCase();

        if (langChosen == 'english'){
          greet = 'HELLO '+ holdName;
          if (namesStored[holdName] === undefined){
            namesStored[holdName] = 0;
            }

        }else if(langChosen == 'afrikaans'){
          greet = 'GOEIE DAG ' + holdName;
          if (namesStored[holdName] === undefined){
            namesStored[holdName] = 0;
            }

        }else if (langChosen == 'isiXhosa'){
          greet = 'USUKU OLUMNWANDI ' + holdName;
          if (namesStored[holdName] === undefined){
            namesStored[holdName] = 0;
            }

        } else{
          alert('insert name and language');
        }


    return greet;
  }else{
    alert('Please insert name and language');
  }
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
  // function returnsGreetings(){
  //   return greet;
  // }

  return{
    greetingTheLogic,
    theGreetCounter,
    returnMap,
    clear,
   // returnsGreetings
  };

}
