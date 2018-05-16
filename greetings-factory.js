function GreetingsFactory(storedUsers){
  var namesStored = {};
  var greetCount = 0;
  var holdName = "";
  var greet = '';
  displayTheCount.innerHTML = Object.keys(storedUsers).length;
  function GreetingTheLogic(name, langChosen){
   
    

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

  function TheGreetCounter(){
      var GreeterCount = Object.keys(namesStored).length;
    return GreeterCount
  }

  function ReturnMap(){
    return namesStored;
  }
  function Clear(){
    namesStored ={};
   localStorage.clear();
  }

  return{
    GreetingTheLogic,
    TheGreetCounter,
    ReturnMap,
    Clear,
  };

}
