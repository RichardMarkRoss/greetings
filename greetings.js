//var langChosen = document.querySelector(".langTypeRadio");

var textBoxValue = document.querySelector(".myText");

var greetAddBtn = document.querySelector(".btnDisplayValue");

var displayNameValue = document.querySelector(".displayTheName");

var displayTheCount = document.querySelector(".displayTheCount");

var users = localStorage.getItem('users')
var storedUsers = users ? JSON.parse(localStorage.getItem('users')) : {};


var theGreetingsVar = greetingsFactory(storedUsers);

function greetingElement() {
  var checkedRadioBtn = document.querySelector("input[name='lang']:checked");
  if (checkedRadioBtn){
      var langChosen = checkedRadioBtn.value;
  }

    var name = textBoxValue.value;

    console.log(theGreetingsVar.theGreetCounter(name, langChosen))
    console.log(theGreetingsVar.returnMap())

    displayNameValue.innerHTML = theGreetingsVar.greetingTheLogic(name, langChosen);
      displayTheCount.innerHTML = theGreetingsVar.theGreetCounter();
      localStorage.setItem('users', JSON.stringify(theGreetingsVar.returnMap()));

  //  console.log(holdName);
}
greetAddBtn.addEventListener('click',function(){
   greetingElement();
 });
