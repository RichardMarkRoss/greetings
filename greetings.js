var textBoxValue = document.querySelector(".myText");
var greetAddBtn = document.querySelector(".btnDisplayValue");
var displayNameValue = document.querySelector(".displayTheName");


  var holdName = "";
function greetingElement() {

    var name = textBoxValue.value;

    if (name != " ") {
        holdName = name;
        //return holdName;
    }
    //
    // console.log(name);
    displayNameValue.innerHTML = holdName;
    console.log(holdName);
}
greetAddBtn.addEventListener('click', greetingElement);
