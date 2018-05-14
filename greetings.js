//var langChosen = document.querySelector(".langTypeRadio");

var textBoxValue = document.querySelector(".myText");

var greetAddBtn = document.querySelector(".btnDisplayValue");

var greetResetBtn = document.querySelector(".btnResetValue");

var displayNameValue = document.querySelector(".displayTheName");

var displayTheCount = document.querySelector(".displayTheCount");

var users = localStorage.getItem('users');
var storedUsers = users ? JSON.parse(localStorage.getItem('users')) : {};


var theGreetingsVar = greetingsFactory(storedUsers);
displayTheCount.innerHTML = Object.keys(storedUsers).length;

function greetingElement() {
  var checkedRadioBtn = document.querySelector("input[name='lang']:checked");
  if (checkedRadioBtn){
      var langChosen = checkedRadioBtn.value;
  }
  
    var name = textBoxValue.value;
  
    // console.log(theGreetingsVar.theGreetCounter(name, langChosen))
    // console.log(theGreetingsVar.returnMap())
  
    displayNameValue.innerHTML = theGreetingsVar.greetingTheLogic(name, langChosen);
    localStorage.setItem('users', JSON.stringify(theGreetingsVar.returnMap()));
    displayTheCount.innerHTML = theGreetingsVar.theGreetCounter();
    //greetingTheLogic
  //  console.log(holdName);

  // if(displayName = ''){
  //   alert("please insert name and language")
  // }
}

greetAddBtn.addEventListener('click',function(){
   greetingElement();
 });
 greetResetBtn.addEventListener('click', function(){
  
  theGreetingsVar.clear();
  //window.location.reload();


});
