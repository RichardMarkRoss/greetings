//var langChosen = document.querySelector(".langTypeRadio");

var textBoxValue = document.querySelector(".myText");

var greetAddBtn = document.querySelector(".btnDisplayValue");

var displayNameValue = document.querySelector(".displayTheName");

var displayTheCount = document.querySelector(".displayTheCount");


  var greetCount = 0;
  var holdName = "";
  var greet = ''
function greetingElement() {
  var checkedRadioBtn = document.querySelector("input[name='lang']:checked");
  if (checkedRadioBtn){
      var langChosen = checkedRadioBtn.value;
  }

    var name = textBoxValue.value;

    if (name != " ") {
        holdName = name;
        greetCount++
        //return holdName;
    };

    if (langChosen == 'english'){
      greet = 'hello' +' '+ holdName;
    }else if(langChosen == 'afrikaans'){
      greet = 'Goeie dag ' + holdName;
    }else if (langChosen == 'isiXhosa'){
      greet = 'Usuku olumnwandi ' + holdName;
    };


    //
    // console.log(name);
    displayNameValue.innerHTML = greet;
      displayTheCount.innerHTML = greetCount;
    console.log(holdName);
}
greetAddBtn.addEventListener('click', greetingElement);
